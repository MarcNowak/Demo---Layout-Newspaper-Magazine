/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../SocialMedia/TopBarSocialList.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faVimeo,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const TopBarSocialList = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a href='#'>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a href='#'>
            <FontAwesomeIcon icon={faVimeo}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a href='#'>
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  </div>

);

// TopBarSocialList.propTypes = {};

export default TopBarSocialList;

