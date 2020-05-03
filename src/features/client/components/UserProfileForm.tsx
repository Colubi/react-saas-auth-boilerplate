import css from '@emotion/css';
import { Avatar, Box, Button, InputAdornment } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React, { SyntheticEvent } from 'react';
import defaultAvatar from '../../../assets/anonymous.png';
import { Form, FormPaper } from '../../../ui/FormComponents';
import LoadingButton from '../../../ui/LoadingButton';

export default function UserProfileForm(props: any) {
  const {
    values: {
      email,
      password,
      firstName,
      lastName,
      googleId,
      facebookId,
      avatar,
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    isSubmitting,
    isValid,
    editingProfile,
    setEditingProfile,
    isUsingPasswordAuthentication,
  } = props;

  const change = (name: string, e: SyntheticEvent) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormPaper>
        <Form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt="User Avatar"
              src={avatar || defaultAvatar}
              css={(theme) => css`
                width: ${theme.spacing(9)}px;
                height: ${theme.spacing(9)}px;
                margin-bottom: ${theme.spacing(4)}px;
              `}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                helperText={touched.firstName ? errors.firstName : ''}
                error={touched.firstName && Boolean(errors.firstName)}
                value={firstName}
                onChange={change.bind(null, 'firstName')}
                InputProps={{
                  readOnly: !editingProfile,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                value={lastName}
                onChange={change.bind(null, 'lastName')}
                InputProps={{
                  readOnly: !editingProfile,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                value={email}
                onChange={change.bind(null, 'email')}
                InputProps={{
                  readOnly: !editingProfile,
                }}
              />
            </Grid>
            {facebookId && (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Facebook Id"
                  name="facebookId"
                  autoComplete="facebookId"
                  helperText={touched.facebookId ? errors.facebookId : ''}
                  error={touched.facebookId && Boolean(errors.facebookId)}
                  value={facebookId}
                  onChange={change.bind(null, 'facebookId')}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <FacebookIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            )}
            {googleId && (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Google Id"
                  name="googleId"
                  autoComplete="googleId"
                  helperText={touched.googleId ? errors.googleId : ''}
                  error={touched.googleId && Boolean(errors.googleId)}
                  value={googleId}
                  onChange={change.bind(null, 'googleId')}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SupervisorAccountIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            )}
            {isUsingPasswordAuthentication && (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  helperText={touched.password ? errors.password : ''}
                  error={touched.password && Boolean(errors.password)}
                  value={password}
                  onChange={change.bind(null, 'password')}
                  InputProps={{
                    readOnly: !editingProfile,
                  }}
                />
              </Grid>
            )}
          </Grid>
          {editingProfile && (
            <>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                css={(theme) => ({ margin: theme.spacing(3, 0, 2) })}
                loading={isSubmitting}
                disabled={Boolean(!isValid || isSubmitting)}
              >
                Update Profile
              </LoadingButton>
              <Button fullWidth onClick={() => setEditingProfile(false)}>
                Cancel
              </Button>
            </>
          )}
        </Form>
      </FormPaper>
    </Container>
  );
}
