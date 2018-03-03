import 'cross-fetch';

import { apiService } from '../api/login';
import { history } from '../utils/history';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Synchronous action creators.
export const register = () => {
  return {
    type: REGISTER
  };
};

export const registerSuccess = user => {
  return {
    type: REGISTER_SUCCESS,
    user
  };
};

export const registerFailure = error => {
  return {
    type: REGISTER_FAILURE,
    error
  };
};

// Async action creators.
// used by thunk middleware.
export const doRegistration = form => dispatch => {
  // Dispatch action to indicate register starting.
  dispatch(register());

  apiService.register(form).then(
    user => {
      dispatch(registerSuccess(user));
      // No need to direct user to logging in when we already get the
      // newly created user back, just dispatch the login success action
      // creator
      history.push('/login');
    },
    error => {
      dispatch(registerFailure(error));
      // dispatch(alertActions.error(error));
    }
  );
};
