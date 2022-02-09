/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <span>© Copyright - Newspaper Wordpress Theme by TagDiv</span>
      </div>
      <div className={styles.rightSide}>
        <ul>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

// Footer.propTypes = {};

export default Footer;
