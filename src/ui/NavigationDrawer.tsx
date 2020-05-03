import {
  Drawer,
  IconButton,
  isWidthUp,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  withWidth,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import CloseIcon from '@material-ui/icons/Close';
import React, { useLayoutEffect } from 'react';
import styled from './styled';
import PlainLink from './PlainLink';

const ListItemCloseIcon = styled(ListItemIcon)`
  margin-right: ${({ theme }) => theme.spacing(0.5)};
`;

const StyledListItem = styled(ListItem)`
  padding-top: ${({ theme }) => theme.spacing(0)};
  padding-bottom: ${({ theme }) => theme.spacing(0)};
  height: 100%;
`;

const HeadSection = styled(Toolbar)`
  width: 200px;
`;

const BlackList = styled(List)`
  background-color: ${({ theme }) => theme.palette.common.black};
  height: 100%;
`;

export type MenuItem = {
  name: string;
  link?: string;
  icon: React.ReactElement;
  onClick?: () => void;
};

type NavigationDrawerProps = {
  width: Breakpoint;
  open: boolean;
  anchor: 'left' | 'top' | 'right' | 'bottom' | undefined;
  menuItems: MenuItem[];
  selectedItem: string;
  onClose: () => void;
};

const NavigationDrawer = ({
  width,
  open,
  onClose,
  anchor,
  menuItems,
  selectedItem,
}: NavigationDrawerProps) => {
  useLayoutEffect(() => {
    window.onresize = () => {
      if (isWidthUp('sm', width) && open) {
        onClose();
      }
    };
  }, [width, open, onClose]);

  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <HeadSection>
        <StyledListItem
          style={{
            justifyContent: anchor === 'left' ? 'flex-start' : 'flex-end',
          }}
          disableGutters
          button={true}
        >
          <ListItemCloseIcon>
            <IconButton onClick={onClose} aria-label="Close Navigation">
              <CloseIcon color="primary" />
            </IconButton>
          </ListItemCloseIcon>
        </StyledListItem>
      </HeadSection>
      <BlackList>
        {menuItems.map((element) => {
          if (element.link) {
            return (
              <PlainLink key={element.name} to={element.link} onClick={onClose}>
                <ListItem
                  button
                  selected={selectedItem === element.name}
                  /**
                   * We disable ripple as it will make a weird animation
                   * with primary and secondary color
                   */
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {element.name}
                      </Typography>
                    }
                  />
                </ListItem>
              </PlainLink>
            );
          }
          return (
            <ListItem button key={element.name} onClick={element.onClick}>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className="text-white">
                    {element.name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </BlackList>
    </Drawer>
  );
};

export default withWidth()(NavigationDrawer);
