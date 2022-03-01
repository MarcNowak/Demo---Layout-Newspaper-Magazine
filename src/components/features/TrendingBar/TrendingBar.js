/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';
import { articleTitle } from '../../../db/dataStore';

import styles from './TrendingBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const TrendingBar = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.trendingWrapper}>
        <div className={styles.trendingNow}>
          <span>trending now</span>
        </div>
      </div>
      <div className={styles.trendingDesc}>
        <span>{articleTitle.title10}</span>
      </div>
      <div className={styles.arrows}>
        <div className={styles.arrowPrev}>
          <a href='#'>
            <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.arrowNext}>
          <a href="#">
            <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TrendingBar;
