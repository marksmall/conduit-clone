import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ appName }) => {
  return (
    <footer>
      <a className="navbar-brand">{appName.toLowerCase()}</a>
    </footer>
  );
};

Footer.propTypes = {
  appName: PropTypes.string
};

export default Footer;
