import styled from '../../ui/styled';
import React, { useState } from 'react';
import NavBar from './navigation/NavBar';
import Footer from './footer/Footer';
import CookieConsent from './cookies/CookieConsent';
import CookieRulesDialog from './cookies/CookieRulesDialog';
import Home from './home/Home';
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';
import history from '../../sdk/utils/history';
import { Route } from 'react-router';
import FormDialog from '../../ui/FormDialog';
import LoginFormContainer from '../authentication/login/LoginFormContainer';
import RegisterFormContainer from '../authentication/registration/RegisterFormContainer';
import { useDispatch } from 'react-redux';
import { unsetClient } from '../client/redux/actions';

AOS.init({ once: true });

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('Home');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [cookieRulesDialogOpen, setCookieRulesDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const openLoginDialog = () => {
    history.push('/login');
    setMobileDrawerOpen(false);
  };

  const openRegisterDialog = () => {
    history.push('/register');
    setMobileDrawerOpen(false);
  };

  const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    overflow-x: hidden;
  `;

  return (
    <Wrapper>
      <NavBar
        selectedTab={selectedTab}
        selectTab={(tab: string) => setSelectedTab(tab)}
        openLoginDialog={openLoginDialog}
        openRegisterDialog={openRegisterDialog}
        mobileDrawerOpen={mobileDrawerOpen}
        handleMobileDrawerOpen={() => setMobileDrawerOpen(true)}
        handleMobileDrawerClose={() => setMobileDrawerOpen(false)}
      />
      <Home selectHome={() => setSelectedTab('Home')} />
      <Footer />
      {!cookieRulesDialogOpen && (
        <CookieConsent
          handleCookieRulesDialogOpen={() => setCookieRulesDialogOpen(true)}
        />
      )}
      <CookieRulesDialog
        open={cookieRulesDialogOpen}
        onClose={() => setCookieRulesDialogOpen(false)}
      />

      {/* DIALOG ROUTES */}
      <Route path="/login" exact>
        <FormDialog title="Sign In" onBackdropClick={() => history.goBack()}>
          <LoginFormContainer />
        </FormDialog>
      </Route>
      <Route path="/register" exact>
        <FormDialog title="Sign Up" onBackdropClick={() => history.goBack()}>
          <RegisterFormContainer />
        </FormDialog>
      </Route>
      <Route
        path="/logout"
        render={() => {
          dispatch(unsetClient());
          return null;
        }}
      />
    </Wrapper>
  );
};

export default Main;
