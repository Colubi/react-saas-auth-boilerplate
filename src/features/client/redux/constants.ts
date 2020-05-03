export const CLIENT_SET = 'CLIENT_SET';
export const CLIENT_UNSET = 'CLIENT_UNSET';
export const TOKEN_SET = 'TOKEN_SET';
export const USER_SET = 'USER_SET';
export const USER_PARTIAL_SET = 'USER_PARTIAL_SET';

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: string;
  googleId?: string;
  facebookId?: string;
};

export type Client = {
  accessToken: string | null;
  user: User | null;
};

export type SetClientAction = {
  type: typeof CLIENT_SET;
  payload: Client;
};

export type SetTokenAction = {
  type: typeof TOKEN_SET;
  payload: string;
};

export type UnsetClientAction = {
  type: typeof CLIENT_UNSET;
};

export type SetUserAction = {
  type: typeof USER_SET;
  payload: User;
};

export type SetPartialUserAction = {
  type: typeof USER_PARTIAL_SET;
  payload: Partial<User>;
};

export type ClientAction =
  | SetClientAction
  | UnsetClientAction
  | SetTokenAction
  | SetUserAction
  | SetPartialUserAction;
