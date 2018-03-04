import React, { Component } from 'react';

import styles from './login.module.css';
import LoginForm from './login-form.component';

class Login extends Component {
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.loggingIn = true;
  //   this.props.login(this.state);
  // };

  render() {
    return (
      <div className={styles['auth-page']}>
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <a href="#">Need an account?</a>
              </p>

              <LoginForm props={this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
