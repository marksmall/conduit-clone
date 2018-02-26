import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ appName }) => {
  return (
    <header>
      <nav className="navbar navbar-light">
        <a className="navbar-brand">{appName.toLowerCase()}</a>
      </nav>
    </header>
  );
};

Header.propTypes = {
  appName: PropTypes.string
};

export default Header;
