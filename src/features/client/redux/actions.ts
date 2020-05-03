import {
  User,
  USER_SET,
  CLIENT_SET,
  CLIENT_UNSET,
  SetClientAction,
  Client,
  UnsetClientAction,
  TOKEN_SET,
  SetTokenAction,
  SetUserAction,
  SetPartialUserAction,
  USER_PARTIAL_SET,
} from './constants';

export function setClient(payload: Client): SetClientAction {
  return {
    type: CLIENT_SET,
    payload,
  };
}

export function unsetClient(): UnsetClientAction {
  return {
    type: CLIENT_UNSET,
  };
}

export function setToken({
  accessToken,
  remember,
}: {
  accessToken: string;
  remember?: boolean;
}): SetTokenAction {
  if (remember) {
    localStorage.setItem('accessToken', accessToken);
  }
  return {
    type: TOKEN_SET,
    payload: accessToken,
  };
}

export function setUser(payload: User): SetUserAction {
  return {
    type: USER_SET,
    payload,
  };
}

export function setPartialUser(payload: Partial<User>): SetPartialUserAction {
  return {
    type: USER_PARTIAL_SET,
    payload,
  };
}
