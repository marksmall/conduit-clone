import React from 'react';
import * as R from 'ramda';

import withForm, {
  getValue,
  hasCapitalLetter,
  isLengthGreaterThan,
  isNotEmpty
} from '../utils/form/validation/withForm';

const LoginForm = ({ form, onChange, onSubmit, errors = {} }) => (
  <fieldset>
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
      onClick={() => onSubmit(form)}
    >
      Sign in
    </button>
    {this.loggingIn && (
      <img
        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        alt="spinner"
      />
    )}

    {/* <div className="formGroup">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={form.name}
        onChange={R.compose(onChange('name'), getValue)}
      />
      {errors.name}
    </div>
    <div className="formGroup">
      <label htmlFor="random">Random</label>
      <input
        id="random"
        type="text"
        value={form.random}
        onChange={R.compose(onChange('random'), getValue)}
      />
      {errors.random}
    </div>
    <button onClick={() => onSubmit(form)}>Submit</button> */}
  </fieldset>
);

const validationRules = {
  email: [[isNotEmpty, 'Name should not be  empty.']],
  // password: [[isNotEmpty, 'Name should not be  empty.']]
  password: [
    [isLengthGreaterThan(7), 'Minimum Random length of 8 is required.'],
    [hasCapitalLetter, 'Random should contain at least one uppercase letter.']
  ]
};

const initialState = {
  form: {
    email: '',
    password: ''
  }
};

const enhanced = withForm(initialState, validationRules);
export default enhanced(LoginForm);
