import React, { SyntheticEvent } from 'react';
import { Hidden, ListItemText, Typography } from '@material-ui/core';
import { User } from '../../../client/redux/constants';
import defaultAvatar from '../../../../assets/anonymous.png';
import { AccountAvatar, IconListItem } from './NavComponents';
import { smBordered } from './styles';
import ProfileMenu from './ProfileMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import css from '@emotion/css';

type UserWidgetProps = {
  user: User;
  setOpenProfileDialog: (value: boolean) => void;
};

const UserWidget: React.FC<UserWidgetProps> = ({
  user,
  setOpenProfileDialog,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const handleClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget as Element);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconListItem
        disableGutters
        css={smBordered}
        button
        onClick={handleClick}
      >
        <Hidden xsDown>
          <ListItemText
            primary={
              <Typography color="textPrimary">{user.firstName}</Typography>
            }
          />
        </Hidden>
        <AccountAvatar
          alt="profile picture"
          src={user.avatar || defaultAvatar}
        />
        <ArrowDropDownIcon
          css={(theme) => css`
            color: ${theme.palette.common.black};
          `}
        />
      </IconListItem>
      {anchorEl && (
        <ProfileMenu
          handleClose={handleClose}
          anchorEl={anchorEl}
          setOpenProfileDialog={setOpenProfileDialog}
        />
      )}
    </>
  );
};

export default UserWidget;
