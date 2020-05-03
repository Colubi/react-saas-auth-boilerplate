import {
  CLIENT_SET,
  CLIENT_UNSET,
  Client,
  ClientAction,
  TOKEN_SET,
  USER_SET,
  USER_PARTIAL_SET,
} from './constants';

const initialSate: Client = {
  accessToken: null,
  user: null,
};

const clientReducer = (state = initialSate, action: ClientAction) => {
  switch (action.type) {
    case CLIENT_SET:
      return action.payload;

    case CLIENT_UNSET:
      return {
        user: null,
        token: null,
      };

    case TOKEN_SET:
      return {
        ...state,
        accessToken: action.payload,
      };

    case USER_SET:
      return {
        ...state,
        user: action.payload,
      };

    case USER_PARTIAL_SET:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default clientReducer;
