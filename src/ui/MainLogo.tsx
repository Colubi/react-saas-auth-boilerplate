import React from 'react';
import styled from './styled';
import { Typography } from '@material-ui/core';

const LogoText = styled(Typography)`
  font-family: 'Baloo Bhaijaan', cursive;
  font-weight: 400;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainLogo = () => (
  <LogoContainer>
    <LogoText variant="h4" display="inline" color="primary">
      SaaS
    </LogoText>
    <LogoText variant="h4" display="inline" color="secondary">
      BoilerPlate
    </LogoText>
  </LogoContainer>
);

export default MainLogo;
