import { Box, Divider } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import MaterialLink from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import React, { SyntheticEvent } from 'react';
import LoadingButton from '../../../ui/LoadingButton';
import { AuthButton } from '../components/AuthButton';
import { Form, FormPaper, RouterLink } from '../../../ui/FormComponents';

export default function LogInForm(props: any) {
  const {
    values: { email, password, remember },
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
          <TextField
            variant="outlined"
            margin="normal"
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            label="Password"
            type="password"
            value={password}
            onChange={change.bind(null, 'password')}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                value={remember}
                checked={remember}
                onChange={change.bind(null, 'remember')}
                color="primary"
              />
            }
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            css={(theme) => ({ margin: theme.spacing(3, 0, 2) })}
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              {/* TODO: Implement Forgot Password
              <RouterLink to="/forgot-password">
                <MaterialLink variant="body2">Forgot password?</MaterialLink>
              </RouterLink> */}
            </Grid>
            <Grid item>
              <RouterLink to="/register">
                <MaterialLink variant="body2">
                  Don't have an account? Sign Up
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
            text="Sign in with Google"
          />
          <AuthButton
            provider="facebook"
            href={`${process.env.REACT_APP_API_URL}/auth/facebook`}
            text="Sign in with Facebook"
          />
        </Box>
      </FormPaper>
    </Container>
  );
}
