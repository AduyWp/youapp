import React, { useEffect } from 'react';
import api from '@/helpers/axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

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

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, confirmPassword: !values.confirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email required'),
        username: Yup.string().required('Username required'),
        password: Yup.string().required('Password required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string().required('Confirm Password required').oneOf([Yup.ref('password')], 'Passwords must match'),
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
        const response = await api.post('/api/register', {
          email: formik.values.email,
          username: formik.values.username,
          password: formik.values.password,
        });
        if (!response) throw response;
        console.log(response)
        if (response.data.message === 'User has been created successfully') {
        	window.toastMessage({
	          open: true,
	          variant: 'success',
	          text: response.data.message,
	        });
          setTimeout(() => {
            router.push('/');
          }, 3000);
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
	    <Content
	    	values={values}
	    	formik={formik}
	    	handleChange={handleChange}
	    	handleClickShowPassword={handleClickShowPassword}
	    	handleMouseDownPassword={handleMouseDownPassword}
	    	router={router}
        handleClickShowConfirmPassword={handleClickShowConfirmPassword}
	    />
	  </>
   );

};

export default Core;