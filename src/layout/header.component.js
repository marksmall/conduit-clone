import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/NavLink';
import { Button } from 'semantic-ui-react';

import styles from './header.module.css';

const Header = ({ appName }) => {
  return (
    <header>
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          <h4 className={styles.brand}>{appName.toLowerCase()}</h4>
        </a>
        <div>
          <NavLink to="/articles" activeClassName="active">
            <Button content="Articles" />
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            <Button content="Login" />
          </NavLink>
          <NavLink to="/signup" activeClassName="active">
            <Button content="Sign up" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  appName: PropTypes.string
};

export default Header;
