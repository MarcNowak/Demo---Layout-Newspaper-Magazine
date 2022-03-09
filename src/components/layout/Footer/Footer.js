/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { footer } from '../../../db/dataStore';
import { footerItems } from '../../../db/testDataStore';
// import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div>{footer.textLeft}</div>
      </div>
      {footerItems.map((footerItem, index) => (
        <div className={styles.rightSide} key={index}>
          <div>
            <a href={footerItem.href}>{footerItem.label}</a>
          </div>
        </div>
      ))}
    </div >
  </footer >
);

// Footer.propTypes = {};

export default Footer;
