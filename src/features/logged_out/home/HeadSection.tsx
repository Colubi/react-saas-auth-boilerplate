import {
  Box,
  Button,
  Card,
  Grid,
  Hidden,
  isWidthUp,
  Typography,
  withWidth,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import React, { Fragment } from 'react';
import styled from '../../../ui/styled';
import WaveBorder from '../../../ui/WaveBorder';
import headerImage from './resources/headerImage.jpg';
import { useTheme } from 'emotion-theming';
import { Theme } from '@material-ui/core';

const StyledButton = styled(Button)(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  [theme.breakpoints.up('xs')]: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  label: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[4],
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(5.5),
    paddingBottom: theme.spacing(5.5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.down('lg')]: {
    width: 'auto',
  },
}));

const HeadSection = ({ width }: { width: Breakpoint }) => {
  return (
    <Fragment>
      <div
        className="md-p-top"
        css={(theme) => ({
          position: 'relative',
          backgroundColor: theme.palette.primary.main,
          paddingBottom: theme.spacing(2),
          marginBottom: '-1px',
        })}
      >
        <div
          className="container-fluid"
          css={(theme) => ({
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(12),
            [theme.breakpoints.down('md')]: {
              marginBottom: theme.spacing(9),
            },
            [theme.breakpoints.down('sm')]: {
              marginBottom: theme.spacing(6),
            },
            [theme.breakpoints.down('sm')]: {
              marginBottom: theme.spacing(3),
            },
          })}
        >
          <Box display="flex" justifyContent="center" className="row">
            <StyledCard data-aos-delay="200" data-aos="zoom-in">
              <div
                className="container"
                css={(theme) => ({
                  [theme.breakpoints.up('md')]: {
                    maxWidth: 'none !important',
                  },
                })}
              >
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp('lg', width) ? 'h3' : 'h4'}
                        >
                          Track your product and start to analyse it
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp('lg', width) ? 'h6' : 'body1'}
                            color="textSecondary"
                          >
                            With SaaS you can track all of your customers
                            getting a complete report.
                          </Typography>
                        </Box>
                        <StyledButton
                          variant="contained"
                          color="primary"
                          fullWidth
                          href="/register"
                        >
                          Get Started
                        </StyledButton>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <img
                        src={headerImage}
                        css={(theme) => ({
                          maxWidth: '100%',
                          verticalAlign: 'middle',
                          borderRadius: theme.shape.borderRadius,
                          boxShadow: theme.shadows[4],
                        })}
                        alt="header"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </StyledCard>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={(useTheme() as Theme).palette.primary.main}
        lowerColor="#FFFFFF"
        css={(theme) => ({
          paddingTop: theme.spacing(4),
        })}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
};

export default withWidth()(HeadSection);
