import { connect } from 'react-redux';

import Register from './register.component';
import { doRegistration } from './register.actions';

const mapDispatchToProps = dispatch => {
  return {
    register: () => {
      dispatch(doRegistration());
    }
  };
};

export default connect(() => ({}), mapDispatchToProps)(Register);
