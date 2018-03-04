import React, { Component } from 'react';

import styles from './register.module.css';
import RegisterForm from './register-form.component';

const Register = props => {
  return (
    <div className={styles['auth-page']}>
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <a>Have an account?</a>
            </p>

            <RegisterForm props={this.props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
