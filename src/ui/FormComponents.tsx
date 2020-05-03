import { Link } from 'react-router-dom';
import styled from './styled';

export const RouterLink = styled(Link)`
  text-decoration: none;

  &:active {
    text-decoration: none;
    color: initial;
  }
`;

export const FormPaper = styled.div`
  margin-top: ${(props) => props.theme.spacing(1)}px;
  margin-bottom: ${(props) => props.theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%; /* Fix IE11 Issue */
`;
