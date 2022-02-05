/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './SocialList.module.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-brands-svg-icons';

const SocialList = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.socialContainer}>
        <div className={styles.socialLogo}>
          <a href="#">
            <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png"  alt="Facebook Logo"/>
          </a>
        </div>
        <div className={styles.numberOfFans}>12345</div>
        <div className={styles.fanName}>Fans</div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.socialLogo}>
          <a href="#">
            <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-twitter-social-media-justicon-flat-justicon.png" alt="Twitter Logo"/>
          </a>
        </div>
        <div className={styles.numberOfFans}>4567</div>
        <div className={styles.fanName}>Followers</div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.socialLogo}>
          <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-youtube-social-media-justicon-flat-justicon.png" alt="YouTube Logo"/>
        </div>
        <div className={styles.numberOfFans}>7890</div>
        <div className={styles.fanName}>Subscribers</div>
      </div>
    </div>
  </div>
);

export default SocialList;
