/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../LogoBar/LogoBar.module.scss';

const LogoBar = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href='#'>
          <img src='https://i.postimg.cc/bNrrFLsb/news-Magazine-Logo.png' alt='Logo' />
        </a>
      </div>
      <div className={styles.banner}>
        <a href='#'>
          <img src='https://i.postimg.cc/WbT6DBYV/banner730x90.jpg' alt='Banner 730x90' />
        </a>
      </div>
    </div>
  </div>
);

// LogoBar.propTypes = {};

export default LogoBar;
