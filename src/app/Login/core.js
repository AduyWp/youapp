import React, { useEffect } from 'react';
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

	const [values, setValues] = React.useState({
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
        email: "",
        username: "",
        password: "",
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email required'),
        username: Yup.string().required('Username required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password required'),
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      handleSubmit(valueToSubmit);
    },
  });

  const handleSubmit = async () => {
    try {
        const response = await api.post('/api/login', {
          email: formik.values.email,
          username: formik.values.username,
          password: formik.values.password,
        });
        if (!response) throw response;
        if (typeof response.data.access_token !== 'undefined') {
        	window.toastMessage({
	          open: true,
	          variant: 'success',
	          text: response.data.message,
	        });
	        localStorage.setItem("token", response.data.access_token);
          setTimeout(() => {
            router.push('/profile');
          }, 1000);
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

  return (
  	<>
      <Layout>
  	    <Content
  	    	values={values}
  	    	formik={formik}
  	    	handleChange={handleChange}
  	    	handleClickShowPassword={handleClickShowPassword}
  	    	handleMouseDownPassword={handleMouseDownPassword}
  	    	router={router}
	     />
      </Layout>
	  </>
   );

};

export default Core;