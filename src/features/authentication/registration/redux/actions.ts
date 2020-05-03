import { REGISTER_REQUESTING } from './constants';

export type RegisterRequestPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  allowExtraEmails: boolean;
};

export const registerRequestAction = ({
  email,
  password,
  firstName,
  lastName,
  allowExtraEmails,
}: RegisterRequestPayload) => {
  return {
    type: REGISTER_REQUESTING,
    email,
    password,
    firstName,
    lastName,
    allowExtraEmails,
  };
};

export default registerRequestAction;
