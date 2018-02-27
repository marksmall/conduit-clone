import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.css';

const Footer = ({ appName }) => {
  return (
    <footer className={styles.footer}>
      <a className="navbar-brand">{appName.toLowerCase()}</a>
    </footer>
  );
};

Footer.propTypes = {
  appName: PropTypes.string
};

export default Footer;
