import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import React from 'react';
import { object, ref, string } from 'yup';
import LoadingButton from '../../../ui/LoadingButton';
import { resetPasswordApi } from '../../../sdk/api/user';
import { useSnackbar } from 'notistack';

type ResetPasswordFormProps = {
  setResetingPassword: (value: boolean) => void;
};

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  setResetingPassword,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async ({
    currentPass,
    newPass,
    setSubmitting,
    resetForm,
  }: any) => {
    try {
      setSubmitting(true);
      await resetPasswordApi({
        currentPassword: currentPass,
        newPassword: newPass,
      });
      enqueueSnackbar('Password Reseted Succesfully', {
        variant: 'success',
      });
      setResetingPassword(false);
    } catch (e) {
      enqueueSnackbar(`Error Reseting Password. ${e}`, {
        variant: 'error',
      });
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        currentPass: '',
        newPass: '',
        confirmPass: '',
      }}
      validationSchema={object().shape({
        currentPass: string().required('Current password is required'),
        newPass: string().required('New password is required'),
        confirmPass: string()
          .oneOf([ref('newPass')], 'Passwords do not match')
          .required('Password is required'),
      })}
      onSubmit={(
        { currentPass, newPass, confirmPass },
        { setSubmitting, resetForm },
      ) =>
        handleSubmit({
          currentPass,
          newPass,
          confirmPass,
          setSubmitting,
          resetForm,
        })
      }
      render={(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit: onSubmit,
          isValid,
          isSubmitting,
        } = props;

        return (
          <form className="form" onSubmit={onSubmit}>
            <TextField
              type="password"
              variant="outlined"
              label="Current Password"
              margin="normal"
              required
              fullWidth
              id="password-current"
              name="currentPass"
              value={values.currentPass}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.currentPass && errors.currentPass
                  ? errors.currentPass
                  : ''
              }
              error={Boolean(touched.currentPass && errors.currentPass)}
            />
            <TextField
              type="password"
              variant="outlined"
              label="New Password"
              margin="normal"
              required
              fullWidth
              id="password-new"
              name="newPass"
              value={values.newPass}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.newPass && errors.newPass ? errors.newPass : ''
              }
              error={Boolean(touched.newPass && errors.newPass)}
            />

            <TextField
              type="password"
              variant="outlined"
              label="Confirm Password"
              margin="normal"
              required
              fullWidth
              id="password-confirm"
              name="confirmPass"
              value={values.confirmPass}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.confirmPass && errors.confirmPass
                  ? errors.confirmPass
                  : ''
              }
              error={Boolean(touched.confirmPass && errors.confirmPass)}
            />

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={Boolean(!isValid || isSubmitting)}
              css={(theme) => ({ margin: theme.spacing(3, 0, 2) })}
              loading={isSubmitting}
            >
              Reset Password
            </LoadingButton>
            <Button fullWidth onClick={() => setResetingPassword(false)}>
              Cancel
            </Button>
          </form>
        );
      }}
    />
  );
};

export default ResetPasswordForm;
