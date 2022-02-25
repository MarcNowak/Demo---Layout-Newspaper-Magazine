/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div>© Copyright</div>
      </div>
      <div className={styles.rightSide}>
        <div>
          <a href='#'>Blog</a>
        </div>
        <div>
          <a href='#'>About</a>
        </div>
        <div>
          <a href='#'>Contact</a>
        </div>
      </div>
    </div >
  </footer >
);

// Footer.propTypes = {};

export default Footer;
