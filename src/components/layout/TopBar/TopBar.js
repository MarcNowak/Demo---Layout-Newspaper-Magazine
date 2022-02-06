/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import TopBarSocialList from '../../features/SocialMedia/TopBarSocialList';

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
          <span>Sign in / Join</span>
        </a>
        <a href='#'>
          <span>Blog</span>
        </a>
        <a href='#'>
          <span>About</span>
        </a>
        <a href='#'>
          <span>Contact</span>
        </a>
        <a href='#'>
          <span>Buy now<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
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
