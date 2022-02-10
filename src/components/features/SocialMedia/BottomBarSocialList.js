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
        <a href="#">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </div>
      <div className={styles.icons}>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
      <div className={styles.icons}>
        <a href="#">
          <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
        </a>
      </div>
      <div className={styles.icons}>
        <a href="#">
          <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
        </a>
      </div>
      <div className={styles.icons}>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  </div>




);

export default BottomBarSocialList;
