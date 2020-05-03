import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import loginRequestAction, { LoginRequestPayload } from './redux/actions';
import { RootState } from '../../../redux/index-reducer';
import { LoginState } from './redux/reducer';
import { useSnackbar } from 'notistack';
import { Client } from '../../client/redux/constants';
import { Redirect } from 'react-router';

const LoginFormValidation = yup.object().shape({
  email: yup
    .string()
    .email('You must enter a valid email')
    .required('You must enter a valid email')
    .typeError('You must enter a valid email'),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
  remember: true,
};

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { requesting, successful, errors } = useSelector<RootState, LoginState>(
    (state) => state.login,
  );

  const { accessToken } = useSelector<RootState, Client>(
    (state) => state.client,
  );

  if (accessToken) {
    enqueueSnackbar('Logging in...', {
      variant: 'info',
      autoHideDuration: 1000,
    });

    return <Redirect to="/app" />;
  }

  return (
    <>
      <Formik
        render={(props) => <LoginForm {...props} isSubmitting={requesting} />}
        initialValues={initialValues}
        validationSchema={LoginFormValidation}
        onSubmit={(e: LoginRequestPayload) => {
          dispatch(loginRequestAction(e));
        }}
        validateOnChange={false}
        validateOnBlur={true}
      />

      {errors.forEach((errorMessage) => {
        const message = `Login Error: ${errorMessage}`;
        enqueueSnackbar(message, {
          variant: 'error',
        });
      })}
      {successful &&
        enqueueSnackbar('Logged-in Succesfully', {
          variant: 'success',
        })}
    </>
  );
};

export default LoginFormContainer;
