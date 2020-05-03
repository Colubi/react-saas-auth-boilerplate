import { AppBar, Button, Hidden, IconButton, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import smoothScrollTop from '../../../sdk/utils/smoothScrollTop';
import NavigationDrawer from '../../../ui/NavigationDrawer';
import PlainLink from '../../../ui/PlainLink';
import styled from '../../../ui/styled';
import MainLogo from '../../../ui/MainLogo';

const StyledAppBar = styled(AppBar)`
  box-shadow: ${({ theme }) => theme.shadows[6]};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const MenuButton = styled(Button)`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
`;

type NavBarProps = {
  handleMobileDrawerOpen: () => void;
  handleMobileDrawerClose: () => void;
  mobileDrawerOpen: boolean;
  selectedTab: string;
  selectTab: (tab: string) => void;
  openRegisterDialog: () => void;
  openLoginDialog: () => void;
};

const NavBar = (props: NavBarProps) => {
  const {
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
    selectTab,
  } = props;
  const menuItems = [
    {
      link: '/',
      name: 'Home',
      icon: <HomeIcon className="text-white" />,
      onClick: () => {
        selectTab('home');
        smoothScrollTop();
      },
    },
    {
      name: 'Register',
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />,
    },
    {
      name: 'Log In',
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />,
    },
  ];
  return (
    <div>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <MainLogo />
          <div>
            <Hidden mdUp>
              <IconButton
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <PlainLink
                      key={element.name}
                      to={element.link}
                      onClick={() => {
                        handleMobileDrawerClose();
                        element.onClick();
                      }}
                    >
                      <MenuButton color="default" size="large">
                        {element.name}
                      </MenuButton>
                    </PlainLink>
                  );
                }
                return (
                  <MenuButton
                    color="default"
                    size="large"
                    onClick={element.onClick}
                    key={element.name}
                  >
                    {element.name}
                  </MenuButton>
                );
              })}
            </Hidden>
          </div>
        </StyledToolbar>
      </StyledAppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
};

export default NavBar;
