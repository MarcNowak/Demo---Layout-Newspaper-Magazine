import React from 'react';

// import PropTypes from 'prop-types';

import styles from './BottomArticles.module.scss';

import LatestArticles from '../LatestArticles';
import BottomRightColumn from '../../features/BottomRightColumn/BottomRightColumn';

const BottomArticles = () => (

  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.bottomArticlesLeft}>
        <LatestArticles />
      </div>
      <div className={styles.bottomArticlesRight}>
        <BottomRightColumn />
      </div>
    </div>
  </div>

);

export default BottomArticles;
