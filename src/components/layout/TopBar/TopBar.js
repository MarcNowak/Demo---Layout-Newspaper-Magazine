/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import TopBarSocialList from '../../features/SocialMedia/TopBarSocialList';
import { topBarMenu } from '../../../db/dataStore';

import styles from '../TopBar/TopBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const TopBar = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.temperature}>
        <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
        <span>-1,3 <sup>C</sup> New York</span>
      </div>
      <div className={styles.date}>
        <span>Friday, February 4, 2022</span>
      </div>
      <div className={styles.topMenu}>
        <a href='#'>
          <span className={styles.btn}>{topBarMenu.signIn}</span>
        </a>
        <a href='#'>
          <span className={styles.btn}>{topBarMenu.blog}</span>
        </a>
        <a href='#'>
          <span className={styles.btn}>{topBarMenu.about}</span>
        </a>
        <a href='#'>
          <span className={styles.btn}>{topBarMenu.contact}</span>
        </a>
        <a href='#'>
          <span className={styles.btn}>{topBarMenu.buyNow}<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
        </a>
      </div>
      <div className={styles.topBarSocialList}>
        <TopBarSocialList />
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
