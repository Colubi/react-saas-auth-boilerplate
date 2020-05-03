import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { RootState } from '../../redux/index-reducer';
import { getMeApi } from '../../sdk/api/user';
import styled from '../../ui/styled';
import { Client, USER_SET } from '../client/redux/constants';
import NavBar from './components/navigation/NavBar';
import FormDialog from '../../ui/FormDialog';
import UserProfileContainer from '../client/components/UserProfileContainer';

export const Main = styled.main(({ theme }) => ({
  marginLeft: theme.spacing(9),
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.down('xs')]: {
    marginLeft: 0,
  },
}));

const LoggedInApp = () => {
  const [selectedTab] = useState('Dashboard');
  const [openProfileDialog, setOpenProfileDialog] = React.useState(false);

  const { user } = useSelector<RootState, Client>((state) => state.client);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      getMeApi().then((response) => {
        dispatch({ type: USER_SET, payload: response.data });
      });
    }
  }, [user, dispatch]);

  if (!user) return null;

  return (
    <>
      <NavBar
        selectedTab={selectedTab}
        user={user}
        setOpenProfileDialog={setOpenProfileDialog}
      />
      <Main>
        <Box m={3}>
          <Route path="/app/dashboard">
            <Typography variant="h4">Hi {user.firstName}!</Typography>
          </Route>
        </Box>
      </Main>
      {openProfileDialog && (
        <FormDialog
          title="User Profile"
          onBackdropClick={() => setOpenProfileDialog(false)}
        >
          <UserProfileContainer />
        </FormDialog>
      )}
    </>
  );
};

export default LoggedInApp;
