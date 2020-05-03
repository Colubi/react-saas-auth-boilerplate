import {
  loginWatcher as LoginSaga,
  logoutWatcher as LogoutSaga,
} from '../features/authentication/login/redux/sagas';
import RegistrationSaga from '../features/authentication/registration/redux/sagas';

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([LoginSaga(), LogoutSaga(), RegistrationSaga()]);
}
