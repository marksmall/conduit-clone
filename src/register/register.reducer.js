import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './register.actions';

const DEFAULT_STATE = {
  isRegistering: false,
  user: {},
  error: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_SUCCESS:
      const { user } = action;
      return {
        ...state,
        isRegistering: false,
        user
      };
    case REGISTER_FAILURE:
      const { error } = action;
      // console.log('Error created: ', error);
      return {
        ...state,
        isRegistering: false,
        error
      };
    default:
      return state;
  }
};

export const doRegistration = state => state.register;
