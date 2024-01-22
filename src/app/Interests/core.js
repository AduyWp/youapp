import React, { useState, useEffect, useRef } from 'react';
import api from '@/helpers/axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Layout from '@/app/theme/layout';

const Core = (props) => {
  const {
      Content,
  } = props;

  const router = useRouter();
  const [profile, setProfile] = useState({
      data: {}
  });
  
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const fetchProfile = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await api.get('/api/getProfile', {
          headers: {
            'x-access-token': token
          }
        });
        if (!response) throw response;
        setProfile((previousState) => ({
          ...previousState,
            data: response.data.data,
        }));
        setTags(response.data.data.interests)
    } catch (err) {
      console.log(err)
    }
  }

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();

      // Add the tag to the list
      setTags([...tags, tagInput.trim()]);

      // Clear the input field
      setTagInput('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    // Filter out the tag to remove from the list
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  
  const formik = useFormik({
    initialValues: {
        name: '',
        birthday: '',
        height: '',
        weight: '',
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name required'),
        birthday: Yup.string().required('Birthday required'),
        height: Yup.number().required('Height required'),
        weight: Yup.number().required('Weight required')
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      handleEditSubmit(valueToSubmit);
      
    },
  });

  const handleEditSubmit = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await api.put('/api/updateProfile', {
          name: formik.values.name,
          birthday: formik.values.birthday,
          height: formik.values.height,
          weight: formik.values.weight,
          interests: tags,
        }, {
           headers: {
            'x-access-token': token
          },
        });
        if (!response) throw response;
        if (response.data.message === 'Profile has been updated successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
          router.push('/profile')
        } else {
          window.toastMessage({
            open: true,
            variant: 'error',
            text: response.data.message,
          });
        }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile && profile.data) {
      formik.setFieldValue('name', profile.data.name)
      formik.setFieldValue('birthday', profile.data.birthday)
      formik.setFieldValue('height', profile.data.height)
      formik.setFieldValue('weight', profile.data.weight)
    }
  }, [profile])

  const goToProfile = () =>{
    router.push('/profile')
  }

  return (
  	<>
      <Layout>
  	    <Content
          profile={profile}
          tagInput={tagInput}
          tags={tags}
          handleInputChange={handleInputChange}
          handleInputKeyDown={handleInputKeyDown}
          handleTagRemove={handleTagRemove}
          goToProfile={goToProfile}
          handleEditSubmit={handleEditSubmit}
        />
      </Layout>
	  </>
   );

};

export default Core;