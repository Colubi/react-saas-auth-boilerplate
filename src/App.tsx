import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { SnackbarProvider } from 'notistack';
import React, { Fragment, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './config/serviceWorker';
import theme, { emotionTheme } from './config/theme';
import LoggedInRoute from './features/authentication/components/LoggedInRoute';
import LoggedInApp from './features/logged_in/Main';
import LoggedOut from './features/logged_out/Main';
import rootReducer from './redux/index-reducer';
import rootSaga from './redux/index-sagas';
import history from './sdk/utils/history';
import GlobalStyles from './ui/GlobalStyles';

// Enable Dev-tools Composer
let composeEnhancers;
if (
  process.env.NODE_ENV !== 'production' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

// Start Redux + Saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <EmotionThemeProvider theme={emotionTheme}>
            <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
              <CssBaseline />
              <GlobalStyles />
              <Suspense fallback={<Fragment />}>
                <Switch>
                  <LoggedInRoute path="/app">
                    <LoggedInApp />
                  </LoggedInRoute>
                  <Route>
                    <LoggedOut />
                  </Route>
                </Switch>
              </Suspense>
            </SnackbarProvider>
          </EmotionThemeProvider>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

serviceWorker.register();

export default App;
