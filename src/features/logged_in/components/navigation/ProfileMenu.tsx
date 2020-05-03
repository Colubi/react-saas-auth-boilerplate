import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import history from '../../../../sdk/utils/history';

type ProfileMenuProps = {
  anchorEl: Element;
  handleClose: () => void;
  setOpenProfileDialog: (value: boolean) => void;
};

export default function ProfileMenu(props: ProfileMenuProps) {
  const { anchorEl, handleClose, setOpenProfileDialog } = props;

  const handleProfileClick = () => {
    setOpenProfileDialog(true);
    handleClose();
  };

  const handleLogoutClick = () => {
    history.push('/logout');
    handleClose();
  };

  return (
    <>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </>
  );
}
