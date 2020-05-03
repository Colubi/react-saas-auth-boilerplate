import { Typography } from '@material-ui/core';
import React, { Fragment, ReactElement } from 'react';
import shadeColor from '../../../sdk/utils/shadeColor';
import styled from '../../../ui/styled';

const IconWrapper = styled.div`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  padding: ${({ theme }) => theme.spacing(1) * 1.5}px;
`;

type FeatureCardProps = {
  Icon: ReactElement;
  headline: string;
  text: string;
  color: string;
};

const FeatureCard = ({ Icon, color, headline, text }: FeatureCardProps) => {
  return (
    <Fragment>
      <IconWrapper
        style={{
          color,
          backgroundColor: shadeColor(color, 0.5),
          fill: color,
        }}
      >
        {Icon}
      </IconWrapper>
      <Typography variant="h5" paragraph>
        {headline}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
    </Fragment>
  );
};

export default FeatureCard;
