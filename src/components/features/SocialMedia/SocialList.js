/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './SocialList.module.scss';

const SocialList = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.socialContainer}>
        <div className={styles.socialLogo}>
          <a href="#">
            <img src="/../../images/mainlayout/icons/socialList_FB_icon.png"  alt="Facebook Logo"/>
          </a>
        </div>
        <div className={styles.numberOfFans}>12,345</div>
        <div className={styles.fanName}>Fans</div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.socialLogo}>
          <a href="#">
            <img src="/../../images/mainlayout/icons/socialList_TT_icon.png" alt="Twitter Logo"/>
          </a>
        </div>
        <div className={styles.numberOfFans}>4,567</div>
        <div className={styles.fanName}>Followers</div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.socialLogo}>
          <img src="/../../images/mainlayout/icons/socialList_YT_icon.png" alt="YouTube Logo"/>
        </div>
        <div className={styles.numberOfFans}>7,890</div>
        <div className={styles.fanName}>Subscribers</div>
      </div>
    </div>
  </div>
);

export default SocialList;
