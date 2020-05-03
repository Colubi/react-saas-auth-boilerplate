import React from 'react';
import { MenuItem } from './types';
import { DrawerPaper, MenuLink } from './NavComponents';
import { List, Tooltip, ListItem, ListItemIcon } from '@material-ui/core';
import { permanentDrawerListItem, justifyCenter } from './styles';

type LeftMenuProps = {
  selectedTab: string;
  menuItems: MenuItem[];
};

const LeftMenu: React.FC<LeftMenuProps> = ({ menuItems, selectedTab }) => (
  <DrawerPaper variant="permanent">
    <List>
      {menuItems.map((element, index) => (
        <MenuLink to={element.link} onClick={element.onClick} key={index}>
          <Tooltip title={element.name} placement="right" key={element.name}>
            <ListItem
              selected={selectedTab === element.name}
              button
              divider={index !== menuItems.length - 1}
              css={permanentDrawerListItem}
              // onClick={() => {}} TODO: Implement route link
              aria-label={
                element.name === 'Logout' ? 'Logout' : `Go to ${element.name}`
              }
            >
              <ListItemIcon css={justifyCenter}>
                {element.icon.desktop}
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        </MenuLink>
      ))}
    </List>
  </DrawerPaper>
);

export default LeftMenu;
