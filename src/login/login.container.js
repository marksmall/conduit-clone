import { connect } from 'react-redux';

import Login from './login.component';
import { doLogin } from './login.actions';

const mapDispatchToProps = dispatch => {
  return {
    submit: form => {
      dispatch(doLogin(form));
    }
  };
};

export default connect(() => ({}), mapDispatchToProps)(Login);
