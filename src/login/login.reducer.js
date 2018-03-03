import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './login.actions';

const DEFAULT_STATE = {
  isLoggingIn: false,
  user: {},
  error: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      const { user } = action;
      return {
        ...state,
        isLoggingIn: false,
        user
      };
    case LOGIN_FAILURE:
      const { error } = action;
      // console.log('Error created: ', error);
      return {
        ...state,
        isLoggingIn: false,
        error
      };
    default:
      return state;
  }
};

export const doLogin = state => state.login;
