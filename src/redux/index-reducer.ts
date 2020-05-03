import { combineReducers } from 'redux';
import client from '../features/client/redux/reducer';
import login from '../features/authentication/login/redux/reducer';
import registration from '../features/authentication/registration/redux/reducer';

import { Client } from '../features/client/redux/constants';
import { LoginState } from '../features/authentication/login/redux/reducer';
import { RegisterState } from '../features/authentication/registration/redux/reducer';

export type RootState = {
  client: Client;
  login: LoginState;
  registration: RegisterState;
};

const rootReducer = combineReducers({
  client,
  login,
  registration,
});

export default rootReducer;
