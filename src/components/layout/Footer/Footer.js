/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { footer } from '../../../db/dataStore';
// import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div>{footer.textLeft}</div>
      </div>
      <div className={styles.rightSide}>
        <div>
          <a href='#'>{footer.blog}</a>
        </div>
        <div>
          <a href='#'>{footer.about}</a>
        </div>
        <div>
          <a href='#'>{footer.contact}</a>
        </div>
      </div>
    </div >
  </footer >
);

// Footer.propTypes = {};

export default Footer;
