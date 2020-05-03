import { call, cancelled, fork, put, take, cancel } from 'redux-saga/effects';
import { registerApi } from '../../../../sdk/api/user';
import history from '../../../../sdk/utils/history';
import {
  REGISTER_ERROR,
  REGISTER_REQUESTING,
  REGISTER_SUCCESS,
} from './constants';
import { LOGIN_REQUESTING } from '../../login/redux/constants';

export function* registerFlow(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  allowExtraEmails: boolean,
) {
  while (true) {
    try {
      yield call(registerApi, {
        email,
        password,
        firstName,
        lastName,
        allowExtraEmails,
      });

      yield put({ type: REGISTER_SUCCESS });
    } catch (e) {
      let error;
      if (e.response && e.response.data) {
        error = e.response.data.message;
      } else {
        error = 'Internal Server Error';
      }
      yield put({ type: REGISTER_ERROR, error });
    } finally {
      // if our call was cancelled we will then just redirect them to login
      if (yield cancelled()) {
        history.push('/register');
      }
    }
  }
}

// Watcher
function* registerWatcher() {
  while (true) {
    const {
      email,
      password,
      firstName,
      lastName,
      allowExtraEmails,
    } = yield take(REGISTER_REQUESTING);

    // Fork register task in the background
    const task = yield fork(
      registerFlow,
      email,
      password,
      firstName,
      lastName,
      allowExtraEmails,
    );

    // Listen to registration end
    const action = yield take([REGISTER_ERROR, REGISTER_SUCCESS]);

    if (action.type === REGISTER_SUCCESS) {
      yield put({ type: LOGIN_REQUESTING, email, password, remember: true });
    }

    yield cancel(task);
  }
}

export default registerWatcher;
