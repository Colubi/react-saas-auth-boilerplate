import { LOGIN_REQUESTING } from './constants';

export type LoginRequestPayload = {
  email: string;
  password: string;
  remember: boolean;
};

// In order to perform an action of type LOGIN_REQUESTING
// we need an email and password
const loginRequestAction = ({
  email,
  password,
  remember,
}: LoginRequestPayload) => {
  return {
    type: LOGIN_REQUESTING,
    email,
    password,
    remember,
  };
};

export default loginRequestAction;
