import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/NavLink';
import { Button } from 'semantic-ui-react';

import styles from './header.module.css';

const Header = ({ appName }) => {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-light">
        <h4>{appName.toLowerCase()}</h4>

        <div>
          <NavLink to="/articles" activeClassName="active">
            <Button content="Articles" />
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            <Button content="Login" />
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
