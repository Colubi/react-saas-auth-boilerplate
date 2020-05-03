import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React, { memo } from 'react';

type ColoredButtonProps = React.ComponentProps<typeof Button> & {
  color: string;
};

const ColoredButton = ({
  color,
  children,
  ...buttonProps
}: ColoredButtonProps) => {
  const buttonTheme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <MuiThemeProvider theme={buttonTheme}>
      <Button {...buttonProps} color="primary">
        {children}
      </Button>
    </MuiThemeProvider>
  );
};

export default memo(ColoredButton);
