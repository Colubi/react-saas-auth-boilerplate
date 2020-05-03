import React from 'react';
import styled from '../../../ui/styled';
import css from '@emotion/css';

const StyledAnchor = styled.a`
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: ${({ theme }) => theme.spacing(1)}px;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  min-width: 220px;

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }

  &:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;
  }
`;

const googleCSS = css`
  background: #dd4b39;

  &:before {
    border-right: #bb3f30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png')
      6px 6px no-repeat;
  }

  &:hover,
  &:focus {
    background: #e74b37;
    text-decoration: none;
  }
`;

const facebookCSS = css`
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  text-shadow: 0 -1px 0 #354c8c;

  &:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png')
      6px 6px no-repeat;
  }

  &:hover,
  &:focus {
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
    text-decoration: none;
  }
`;

const AuthButton = ({
  href,
  text,
  provider,
}: {
  href: string;
  text: string;
  provider: 'google' | 'facebook';
}) => (
  <StyledAnchor
    href={href}
    css={provider === 'google' ? googleCSS : facebookCSS}
  >
    {text}
  </StyledAnchor>
);

export { AuthButton };
