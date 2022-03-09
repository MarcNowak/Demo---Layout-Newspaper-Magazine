import React from 'react';
// import PropTypes from 'prop-types';

import TopBarSocialList from '../../features/SocialMedia/TopBarSocialList';
// import { topBarMenu } from '../../../db/dataStore';
import { topBarItems } from '../../../db/testDataStore';

import styles from '../TopBar/TopBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  // faArrowRight,
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
      {topBarItems.map((topBarItem, index) => (
        <div className={styles.topMenu} key={index}>
          <a href={topBarItem.href}>
            <span className={styles.btn}>{topBarItem.label}</span>
          </a>
        </div>
      ))}

      {/*
        <a href='#'>
          <span className={styles.btn}>{topBarMenu.buyNow}<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
        </a>
       */}

      <div className={styles.topBarSocialList}>
        <TopBarSocialList />
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
