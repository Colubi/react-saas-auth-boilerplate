import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { RootState } from '../../../redux/index-reducer';
import { Client } from '../../client/redux/constants';
import checkAuthorization from '../utils/checkAuthorization';
import { setToken } from '../../client/redux/actions';

type LoggedInRouteProps = {
  exact?: boolean;
  path: string;
  children: React.ReactNode;
};

const LoggedInRoute: React.FC<
  React.ComponentProps<typeof Route> & LoggedInRouteProps
> = ({ children, path, exact, ...otherProps }) => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const { accessToken } = useSelector<RootState, Client>(
    (state) => state.client,
  );

  if (!accessToken) {
    const qsAccessToken = new URLSearchParams(search).get('accessToken');
    if (qsAccessToken) {
      dispatch(
        setToken({
          accessToken: qsAccessToken,
          remember: true,
        }),
      );
    }
  }

  if (!accessToken && !checkAuthorization(dispatch)) {
    return <Redirect to="/login" />;
  }

  return (
    <Route path={path} exact={exact} {...otherProps}>
      {children}
    </Route>
  );
};

export default LoggedInRoute;
