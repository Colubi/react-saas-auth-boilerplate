import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import history from '../../../../sdk/utils/history';
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
import { setClient, unsetClient } from '../../../client/redux/actions';
import { CLIENT_UNSET, Client } from '../../../client/redux/constants';
import { loginApi } from '../../../../sdk/api/authentication';

function* logout() {
  yield put(unsetClient());
  localStorage.removeItem('accessToken');
  history.push('/');
}

function* loginFlow(email: string, password: string, remember: boolean) {
  let client: Client;
  try {
    const loginRequest = yield call(loginApi, { email, password });
    client = loginRequest.data;

    yield put(setClient(client));

    yield put({ type: LOGIN_SUCCESS });

    if (remember) {
      localStorage.setItem('accessToken', client.accessToken as string);
    }

    history.push('/app');
  } catch (e) {
    let error;
    if (e.response && e.response.data) {
      error = e.response.data.message;
    } else {
      error = 'Internal Server Error';
    }
    yield put({ type: LOGIN_ERROR, error });
  } finally {
    // if our call was cancelled we will then just redirect them to login
    if (yield cancelled()) {
      history.push('/login');
    }
  }
}

// Watcher
function* loginWatcher() {
  while (true) {
    const { email, password, remember } = yield take(LOGIN_REQUESTING);

    // Fork login task in the background
    const task = yield fork(loginFlow, email, password, remember);

    // Listen to logout action or login errors
    const action = yield take([CLIENT_UNSET, LOGIN_ERROR]);

    // Handle Logout action during logging in
    if (action.type === CLIENT_UNSET) {
      yield cancel(task);
    }

    // End session
    yield call(logout);
  }
}

function* logoutWatcher() {
  while (true) {
    yield take(CLIENT_UNSET);
    yield call(logout);
  }
}

export { loginWatcher, logoutWatcher };
