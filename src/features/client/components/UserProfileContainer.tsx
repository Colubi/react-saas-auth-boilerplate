import { Box, Button } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/index-reducer';
import { UserFormValidation } from '../../authentication/registration/RegisterFormContainer';
import { Client, USER_PARTIAL_SET } from '../redux/constants';
import ResetPasswordForm from './ResetPasswordForm';
import UserProfileForm from './UserProfileForm';
import { updateProfileApi } from '../../../sdk/api/user';
import { useSnackbar } from 'notistack';

export type UserProfilePayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const UserProfileContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useSelector<RootState, Client>((state) => state.client);
  const [resetingPassword, setResetingPassword] = React.useState(false);
  const [editingProfile, setEditingProfile] = React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async ({ editUserProfileDto, setSubmitting }: any) => {
    try {
      setSubmitting(true);
      await updateProfileApi(editUserProfileDto);
      enqueueSnackbar('Profile Edited Succesfully', {
        variant: 'success',
      });
      setEditingProfile(false);
      dispatch({ type: USER_PARTIAL_SET, payload: editUserProfileDto });
    } catch (e) {
      enqueueSnackbar(`Error Editing Profile. ${e}`, {
        variant: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) return null;
  const isUsingPasswordAuthentication = !user.googleId && !user.facebookId;

  if (resetingPassword) {
    return <ResetPasswordForm setResetingPassword={setResetingPassword} />;
  }

  const initialValues = {
    email: user.email,
    password: '********',
    firstName: user.firstName,
    lastName: user.lastName,
    googleId: user.googleId,
    facebookId: user.facebookId,
    avatar: user.avatar,
  };

  return (
    <>
      <Formik
        render={(props) => (
          <UserProfileForm
            {...props}
            editingProfile={editingProfile}
            setEditingProfile={setEditingProfile}
            isUsingPasswordAuthentication={isUsingPasswordAuthentication}
          />
        )}
        initialValues={initialValues}
        validationSchema={UserFormValidation}
        onSubmit={(editUserProfileDto, { setSubmitting, resetForm }) =>
          handleSubmit({
            editUserProfileDto,
            setSubmitting,
          })
        }
        validateOnChange={false}
        validateOnBlur={true}
      />

      {!editingProfile && (
        <Box
          css={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginTop: -theme.spacing(4),
          })}
        >
          <Button onClick={() => setEditingProfile(true)}>Edit Profile</Button>
          {isUsingPasswordAuthentication && (
            <Button onClick={() => setResetingPassword(true)}>
              Reset Password
            </Button>
          )}
        </Box>
      )}
    </>
  );
};

export default UserProfileContainer;
