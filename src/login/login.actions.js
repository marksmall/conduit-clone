import 'cross-fetch';

import { apiService } from '../api/login';
import { history } from '../utils/history';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Synchronous action creators.
export const login = () => {
  return {
    type: LOGIN
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

// Async action creators.
// used by thunk middleware.
export const doLogin = form => dispatch => {
  // Dispatch action to indicate login starting.
  dispatch(login());

  apiService.login(form).then(
    user => {
      dispatch(loginSuccess(user));
      history.push('/');
    },
    error => {
      dispatch(loginFailure(error));
      // dispatch(alertActions.error(error));
    }
  );
};
