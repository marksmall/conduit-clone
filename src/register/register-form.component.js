import React from 'react';
import * as R from 'ramda';

import withForm, {
  getValue,
  hasCapitalLetter,
  isLengthGreaterThan,
  isNotEmpty
} from '../utils/form/validation/withForm';

const RegisterForm = ({ form, onChange, submit, errors = {} }) => (
  <fieldset className="form">
    <fieldset className="form-group">
      <input
        type="username"
        name="username"
        className="form-control form-control-lg"
        value={form.username}
        onChange={R.compose(onChange('username'), getValue)}
        placeholder="Username"
        autoFocus
      />
      {errors.username}
    </fieldset>
    <fieldset className="form-group">
      <input
        type="email"
        name="email"
        className="form-control form-control-lg"
        value={form.email}
        onChange={R.compose(onChange('email'), getValue)}
        placeholder="Email"
      />
      {errors.email}
    </fieldset>
    <fieldset className="form-group">
      <input
        type="password"
        name="password"
        className="form-control form-control-lg"
        value={form.password}
        onChange={R.compose(onChange('password'), getValue)}
        placeholder="Password"
      />
      {errors.password}
    </fieldset>
    <button
      type="submit"
      className="btn btn-lg btn-primary pull-xs-right"
      onClick={() => submit(form)}
    >
      Sign in
    </button>
    {/* {this.loggingIn && (
      <img
        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        alt="spinner"
      /> */}
  </fieldset>
);

const validationRules = {
  username: [[isNotEmpty, 'Name should not be  empty.']],
  email: [[isNotEmpty, 'Email should not be  empty.']],
  password: [
    [isLengthGreaterThan(7), 'Minimum Password length of 8 is required.'],
    [hasCapitalLetter, 'Password should contain at least one uppercase letter.']
  ]
};

const initialState = {
  form: {
    username: '',
    email: '',
    password: ''
  }
};

export default withForm(initialState, validationRules)(RegisterForm);
