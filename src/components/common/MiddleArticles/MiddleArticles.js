import React from 'react';

// import PropTypes from 'prop-types';

import styles from './MiddleArticles.module.scss';

import Fitness from '../Fitness';
import MiddleRightColumn from '../../features/MiddleRightColumn/MiddleRightColumn';

const MiddleArticles = () => (

  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.middleArticlesLeft}>
        <Fitness />
      </div>
      <div className={styles.middleArticlesRight}>
        <MiddleRightColumn />
      </div>
    </div>
  </div>

);

export default MiddleArticles;
