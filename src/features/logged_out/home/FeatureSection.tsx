import { Grid, isWidthUp, Typography, withWidth } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CancelIcon from '@material-ui/icons/Cancel';
import CloudIcon from '@material-ui/icons/Cloud';
import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import MeassageIcon from '@material-ui/icons/Message';
import React, { ReactElement } from 'react';
import calculateSpacing from './calculateSpacing';
import FeatureCard from './FeatureCard';
import css from '@emotion/css';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

const iconSize = 30;

type Feature = {
  color: string;
  headline: string;
  icon: ReactElement;
  text: string;
  mdDelay: string;
  smDelay: string;
};

const features: Feature[] = [
  {
    color: '#00C853',
    headline: 'Feature 1',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '0',
  },
  {
    color: '#6200EA',
    headline: 'Feature 2',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '200',
  },
  {
    color: '#0091EA',
    headline: 'Feature 3',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: '400',
    smDelay: '0',
  },
  {
    color: '#d50000',
    headline: 'Feature 4',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '200',
  },
  {
    color: '#DD2C00',
    headline: 'Feature 5',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '0',
  },
  {
    color: '#64DD17',
    headline: 'Feature 6',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: '400',
    smDelay: '200',
  },
  {
    color: '#304FFE',
    headline: 'Feature 7',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '0',
  },
  {
    color: '#C51162',
    headline: 'Feature 8',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '200',
  },
  {
    color: '#00B8D4',
    headline: 'Feature 9',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: '400',
    smDelay: '0',
  },
];

const FeatureSection = (props: { width: Breakpoint }) => {
  const { width } = props;
  return (
    <div
      css={css`
        background-color: #ffffff;
      `}
    >
      <div className="container-fluid md-p-top md-p-bottom">
        <Typography variant="h3" align="center" className="md-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp('md', width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default withWidth()(FeatureSection);
