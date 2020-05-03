import styled from '../../../../ui/styled';
import { AppBar, Avatar, ListItem, Drawer, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: theme.shadows[6],
  backgroundColor: theme.palette.common.white,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    marginLeft: 0,
  },
}));

export const AppBarToolBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const AccountAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: 24,
  width: 24,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(0),
  [theme.breakpoints.down('xs')]: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
}));

export const DrawerPaper = styled(Drawer)(({ theme }) => ({
  '> div': {
    height: '100%',
    whiteSpace: 'nowrap',
    border: 0,
    width: theme.spacing(7),
    overflowX: 'hidden',
    marginTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    backgroundColor: theme.palette.common.black,
  },
}));

export const IconListItem = styled(ListItem)(({ theme }) => ({
  width: 'auto',
  borderRadius: theme.shape.borderRadius,
  paddingTop: 11,
  paddingBottom: 11,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

export const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));
