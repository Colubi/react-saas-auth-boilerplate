import { Theme } from '@material-ui/core';

export const smBordered = (theme: Theme) => ({
  [theme.breakpoints.down('xs')]: {
    borderRadius: '50% !important',
  },
});

export const textActive = (theme: Theme) => ({
  color: theme.palette.secondary.main,
});

export const justifyCenter = () => ({
  justifyContent: 'center',
});

export const permanentDrawerListItem = (theme: Theme) => ({
  justifyContent: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
});
