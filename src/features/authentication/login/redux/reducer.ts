import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export type LoginState = {
  requesting: boolean;
  successful: boolean;
  errors: string[];
};

export type LoginAction = {
  type: typeof LOGIN_REQUESTING | typeof LOGIN_SUCCESS | typeof LOGIN_ERROR;
  payload: LoginState;
  error: Error;
};

const initialState: LoginState = {
  requesting: false,
  successful: false,
  errors: [],
};

const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        errors: [],
      };

    case LOGIN_SUCCESS:
      return {
        errors: [],
        requesting: false,
        successful: true,
      };
    case LOGIN_ERROR:
      return {
        errors: state.errors.concat([action.error.toString()]),
        requesting: false,
        successful: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
