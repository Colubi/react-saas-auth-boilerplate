import { Box, Button, Snackbar, Typography } from '@material-ui/core';
import Cookies from 'js-cookie';
import React, { Fragment, PureComponent } from 'react';
import styled from '../../../ui/styled';

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  borderBotttomLeftRadius: 0,
  borderBottomRightRadius: 0,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

type CookieConsentProps = {
  handleCookieRulesDialogOpen: () => void;
};
/**
 * This component is the MUICookieConsent it pops a Snackbar or
 * a Dialog informing the user about cookie consent.
 */
class CookieConsent extends PureComponent<CookieConsentProps> {
  state = {
    visible: false,
  };

  componentDidMount() {
    if (Cookies.get('remember-cookie-snackbar') === undefined) {
      this.setState({ visible: true });
    }
  }

  /**
   * Set a persistent cookie
   */
  onAccept = () => {
    Cookies.set('remember-cookie-snackbar', '', {
      expires: 365,
    });
    this.setState({ visible: false });
  };

  render() {
    const { handleCookieRulesDialogOpen } = this.props;
    return (
      <StyledSnackbar
        open={this.state.visible}
        message={
          <Typography className="text-white">
            We use cookies to ensure you get the best experience on our website.{' '}
          </Typography>
        }
        action={
          <Fragment>
            <Box mr={1}>
              <Button color="primary" onClick={handleCookieRulesDialogOpen}>
                More details
              </Button>
            </Box>
            <Button color="primary" onClick={this.onAccept}>
              Got it!
            </Button>
          </Fragment>
        }
      />
    );
  }
}

export default CookieConsent;
