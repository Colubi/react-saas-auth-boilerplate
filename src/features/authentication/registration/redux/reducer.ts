import {
  REGISTER_REQUESTING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './constants';

export type RegisterState = {
  requesting: boolean;
  successful: boolean;
  errors: string[];
};

export type RegisterAction = {
  type:
    | typeof REGISTER_REQUESTING
    | typeof REGISTER_SUCCESS
    | typeof REGISTER_ERROR;
  payload: RegisterState;
  error: Error;
};

const initialState: RegisterState = {
  requesting: false,
  successful: false,
  errors: [],
};

const registerReducer = (state = initialState, action: RegisterAction) => {
  switch (action.type) {
    case REGISTER_REQUESTING:
      return {
        requesting: true,
        successful: false,
        errors: [],
      };

    case REGISTER_SUCCESS:
      return {
        errors: [],
        requesting: false,
        successful: true,
      };
    case REGISTER_ERROR:
      return {
        errors: state.errors.concat([action.error.toString()]),
        requesting: false,
        successful: false,
      };

    default:
      return state;
  }
};

export default registerReducer;
