import { ReactElement } from 'react';

export type MenuItem = {
  link: string;
  name: string;
  icon: {
    desktop: ReactElement;
    mobile: ReactElement;
  };
  onClick?: () => void;
};
