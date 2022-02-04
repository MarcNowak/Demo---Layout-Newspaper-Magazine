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
        <p>-1,3 <sup>C</sup> New York</p>
      </div>
      <div className={styles.date}>
        <p>Friday, February 4, 2022</p>
      </div>
      <div className={styles.topMenu}>
        <a href='#'>
          <p>Sign in / Join</p>
        </a>
        <a href='#'>
          <p>Blog</p>
        </a>
        <a href='#'>
          <p>About</p>
        </a>
        <a href='#'>
          <p>Contact</p>
        </a>
        <a href='#'>
          <p>Buy now<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
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
