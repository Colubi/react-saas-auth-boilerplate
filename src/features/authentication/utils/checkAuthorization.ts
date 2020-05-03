import { setToken } from '../../client/redux/actions';
import decode from 'jwt-decode';
import { Dispatch } from 'redux';

const validateToken = (token: string) => {
  try {
    const { exp: expiryDate } = decode(token);

    if (Date.now() >= expiryDate * 1000) {
      return false;
    } else {
      return true;
    }
  } catch {
    return false;
  }
};

const checkAuthorization = (dispatch: Dispatch) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken && validateToken(accessToken)) {
    dispatch(setToken({ accessToken }));
    return true;
  }

  return false;
};

export default checkAuthorization;
