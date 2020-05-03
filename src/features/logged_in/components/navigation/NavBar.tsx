import { Box, Hidden, IconButton } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import ImageIcon from '@material-ui/icons/Image';
import MapIcon from '@material-ui/icons/Map';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TimelineIcon from '@material-ui/icons/Timeline';
import React, { Fragment, useState } from 'react';
import MainLogo from '../../../../ui/MainLogo';
import NavigationDrawer from '../../../../ui/NavigationDrawer';
import { User } from '../../../client/redux/constants';
import LeftMenu from './LeftMenu';
import { AppBarToolBar, StyledAppBar } from './NavComponents';
import { textActive } from './styles';
import { MenuItem } from './types';
import UserWidget from './UserWidget';

type NavBarProps = {
  selectedTab: string;
  user?: User;
  setOpenProfileDialog: (value: boolean) => void;
};
const NavBar: React.FC<NavBarProps> = ({
  selectedTab,
  user,
  setOpenProfileDialog,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      link: '/app/dashboard',
      name: 'Dashboard',
      onClick: () => {
        setMobileDrawerOpen(false);
      },
      icon: {
        desktop: (
          <DashboardIcon
            css={selectedTab === 'Dashboard' ? textActive : 'text-white'}
            fontSize="small"
          />
        ),
        mobile: <DashboardIcon className="text-white" />,
      },
    },
    {
      link: '/app/map',
      name: 'Map',
      onClick: () => {
        setMobileDrawerOpen(false);
      },
      icon: {
        desktop: (
          <MapIcon
            css={selectedTab === 'Map' ? textActive : 'text-white'}
            fontSize="small"
          />
        ),
        mobile: <ImageIcon className="text-white" />,
      },
    },
    {
      link: '/app/calendar',
      name: 'Calendar',
      onClick: () => {
        setMobileDrawerOpen(false);
      },
      icon: {
        desktop: (
          <EventIcon
            css={selectedTab === 'Calendar' ? textActive : 'text-white'}
          />
        ),
        mobile: <AccountBalanceIcon className="text-white" />,
      },
    },
    {
      link: '/app/analytics',
      name: 'Analytics',
      onClick: () => {
        setMobileDrawerOpen(false);
      },
      icon: {
        desktop: (
          <TimelineIcon
            css={selectedTab === 'Analytics' ? textActive : 'text-white'}
          />
        ),
        mobile: <TimelineIcon className="text-white" />,
      },
    },
    {
      link: '/logout',
      name: 'Logout',
      icon: {
        desktop: (
          <PowerSettingsNewIcon className="text-white" fontSize="small" />
        ),
        mobile: <PowerSettingsNewIcon className="text-white" />,
      },
    },
  ];

  return (
    <Fragment>
      <StyledAppBar position="sticky">
        <AppBarToolBar>
          <Box display="flex" alignItems="center">
            <MainLogo />
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
          >
            {user && (
              <UserWidget
                user={user}
                setOpenProfileDialog={setOpenProfileDialog}
              />
            )}
            <Hidden smUp>
              <Box mr={1}>
                <IconButton
                  aria-label="Open Navigation"
                  onClick={() => setMobileDrawerOpen(true)}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Hidden>
          </Box>
        </AppBarToolBar>
      </StyledAppBar>

      <Hidden xsDown>
        <LeftMenu menuItems={menuItems} selectedTab={selectedTab} />
      </Hidden>
      <NavigationDrawer
        menuItems={menuItems.map((element) => ({
          link: element.link,
          name: element.name,
          icon: element.icon.mobile,
          onClick: element.onClick,
        }))}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </Fragment>
  );
};

export default NavBar;
