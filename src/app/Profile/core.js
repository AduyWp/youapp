import React, { useState, useEffect } from 'react';
import api from '@/helpers/axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Layout from '@/app/theme/layout';

const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
];

const Core = (props) => {
  const {
      Content,
  } = props;

  const router = useRouter();
  const [profile, setProfile] = useState({
      data: {}
  });
  const [age, setAge] = useState()
  const [editProlile, setEditProfile] = React.useState({
    showEdit: false,
  })

  const [selectedImage, setSelectedImage] = useState(null);
  const [gender, setGender] = useState();
  const [image, setImage] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleButtonClick = () => {
    // Trigger click on the hidden input field
    document.getElementById('imageInput').click();
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleClickShowEdit = () => {
    setEditProfile({ ...editProlile, showEdit: !editProlile.showEdit });
  };

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

        var today = new Date();
        var birthDate = new Date(response.data.data.birthday);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }

        setAge(age_now)
    } catch (err) {
      console.log(err)
    }
  }

  
  const formik = useFormik({
    initialValues: {
        name: '',
        birthday: '',
        height: '',
        weight: '',
        gender: '',
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name required'),
        birthday: Yup.string().required('Birthday required'),
        height: Yup.number().required('Height required'),
        weight: Yup.number().required('Weight required'),
        gender: Yup.string().required('Gender required'),
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      console.log(valueToSubmit)
      if (typeof profile.data.name !== 'undefined') {
        handleEditSubmit(valueToSubmit);
      } else {
        handleSubmit(valueToSubmit);
      }
    },
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await api.post('/api/createProfile', {
          name: formik.values.name,
          birthday: formik.values.birthday,
          height: formik.values.height,
          weight: formik.values.weight,
          interests: [],
        }, {
           headers: {
            'x-access-token': token
          },
        });
        if (!response) throw response;
        if (response.data.message === 'Profile has been created successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
          localStorage.setItem("gender", formik.values.gender);
          localStorage.setItem('image', true)
          window.location.reload()
          setEditProfile({ ...editProlile, showEdit: !editProlile.showEdit });
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
  };

  const handleEditSubmit = async (e) => {
    const token = localStorage.getItem('token')
    try {
        const response = await api.put('/api/updateProfile', {
          name: formik.values.name,
          birthday: formik.values.birthday,
          height: formik.values.height,
          weight: formik.values.weight,
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
          localStorage.setItem("gender", formik.values.gender);
          localStorage.setItem('image', true)
          window.location.reload()
          setEditProfile({ ...editProlile, showEdit: !editProlile.showEdit });
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
    if (localStorage.getItem('image') !== null) {
      setImage(localStorage.getItem('image'))
    } else {
      setImage(false)
    }

    if (localStorage.getItem('gender') !== null) {
      setGender(localStorage.getItem('gender'))
    }
  }, []);

  useEffect(() => {
    if (profile && profile.data) {
      formik.setFieldValue('name', profile.data.name)
      formik.setFieldValue('birthday', profile.data.birthday)
      formik.setFieldValue('height', profile.data.height)
      formik.setFieldValue('weight', profile.data.weight)
      formik.setFieldValue('gender', localStorage.getItem('gender'))
    }
  }, [profile])

  const goToInterest = () => {
    router.push('/interests')
  }

  return (
  	<>
      <Layout>
  	    <Content
          profile={profile}
          age={age}
          handleClickShowEdit={handleClickShowEdit}
          editProlile={editProlile}
          handleChangeGender={handleChangeGender}
          gender={gender}
          genders={genders}
          formik={formik}
          goToInterest={goToInterest}
          handleImageChange={handleImageChange}
          selectedImage={selectedImage}
          handleButtonClick={handleButtonClick}
          image={image}
        />
      </Layout>
	  </>
   );

};

export default Core;