import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import MaterialLink from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import React, { SyntheticEvent } from 'react';
import LoadingButton from '../../../ui/LoadingButton';
import { Form, FormPaper, RouterLink } from '../../../ui/FormComponents';
import { Box, Divider } from '@material-ui/core';
import { AuthButton } from '../components/AuthButton';

export default function SignUp(props: any) {
  const {
    values: { email, password, firstName, lastName, allowExtraEmails },
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    isSubmitting,
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                helperText={touched.firstName ? errors.firstName : ''}
                error={touched.firstName && Boolean(errors.firstName)}
                value={firstName}
                onChange={change.bind(null, 'firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                value={lastName}
                onChange={change.bind(null, 'lastName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                value={email}
                onChange={change.bind(null, 'email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allowExtraEmails}
                    value={allowExtraEmails}
                    color="primary"
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            css={(theme) => ({ margin: theme.spacing(3, 0, 2) })}
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign Up
          </LoadingButton>
          <Grid container justify="flex-end">
            <Grid item>
              <RouterLink to="/login">
                <MaterialLink variant="body2">
                  Already have an account? Sign in
                </MaterialLink>
              </RouterLink>
            </Grid>
          </Grid>
        </Form>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          m={3}
          width="70%"
        >
          <Divider />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" m={0}>
          <AuthButton
            provider="google"
            href={`${process.env.REACT_APP_API_URL}/auth/google`}
            text="Sign up with Google"
          />
          <AuthButton
            provider="facebook"
            href={`${process.env.REACT_APP_API_URL}/auth/facebook`}
            text="Sign up with Facebook"
          />
        </Box>
      </FormPaper>
    </Container>
  );
}
