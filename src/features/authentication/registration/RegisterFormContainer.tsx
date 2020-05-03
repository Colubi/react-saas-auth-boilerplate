import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import RegisterForm from './RegisterForm';
import { useSnackbar } from 'notistack';
import { RegisterState } from './redux/reducer';
import { RootState } from '../../../redux/index-reducer';
import { useSelector, useDispatch } from 'react-redux';
import registerRequestAction from './redux/actions';
import { RegisterRequestPayload } from './redux/actions';

export const UserFormValidation = yup.object().shape({
  email: yup
    .string()
    .email('You must enter a valid email')
    .required('You must enter a valid email')
    .typeError('You must enter a valid email'),
  firstName: yup
    .string()
    .required('You must enter your First Name')
    .min(2)
    .max(20),
  lastName: yup
    .string()
    .required('You must enter your Last Name')
    .min(2)
    .max(40),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  allowExtraEmails: true,
};

const RegisterFormContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { requesting, successful, errors } = useSelector<
    RootState,
    RegisterState
  >((state) => state.registration);

  return (
    <>
      <Formik
        render={(props) => (
          <RegisterForm {...props} isSubmitting={requesting} />
        )}
        initialValues={initialValues}
        validationSchema={UserFormValidation}
        onSubmit={(e: RegisterRequestPayload) => {
          dispatch(registerRequestAction(e));
        }}
        validateOnChange={false}
        validateOnBlur={true}
      />
      {errors.forEach((errorMessage) => {
        const message = `Registration Error: ${errorMessage}`;
        enqueueSnackbar(message, {
          variant: 'error',
        });
      })}
      {successful &&
        enqueueSnackbar('Registered Succesfully', {
          variant: 'success',
        })}
    </>
  );
};

export default RegisterFormContainer;
