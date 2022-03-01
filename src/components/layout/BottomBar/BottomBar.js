import React from 'react';
// import PropTypes from 'prop-types';

import { bottomBar } from '../../../db/dataStore';

import BottomBarSocialList from '../../features/SocialMedia/BottomBarSocialList';

import styles from './BottomBar.module.scss';

const BottomBar = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.logo}>
          <img src={bottomBar.bottomBarImage} alt={bottomBar.bottomBarAlt} />
        </div>
        <div className={styles.bottomBarText}>{bottomBar.bottomBarText}</div>
        <div className={styles.contact}>
          {bottomBar.bottomBarContact}<a href="mailto:webmaster@example.com">{bottomBar.bottomBarMail}</a>
        </div>
        <div className={styles.component}>
          <BottomBarSocialList />
        </div>
      </div>
    </div>
  </div>
);

// BottomBar.propTypes = {};

export default BottomBar;
