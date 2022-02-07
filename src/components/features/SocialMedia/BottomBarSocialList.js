/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './BottomBarSocialList.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faPinterest,
  faTumblr,
} from '@fortawesome/free-brands-svg-icons';

const BottomBarSocialList = () => (

  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.icons}>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </div>
    </div>
  </div>




);

export default BottomBarSocialList;
