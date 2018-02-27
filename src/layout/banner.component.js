import React from 'react';
import PropTypes from 'prop-types';

import styles from './banner.module.css';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <h1 className="logo-font">{appName.toLowerCase()}</h1>
      <p>A place to share your knowledge.</p>
    </div>
  );
};

Banner.propTypes = {
  appName: PropTypes.string
};

export default Banner;
