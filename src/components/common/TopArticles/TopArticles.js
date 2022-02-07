import React from 'react';
// import PropTypes from 'prop-types';

import styles from './TopArticles.module.scss';

import GlobalNews from '../GlobalNews';
import TravelGuides from '../TravelGuides';
import Gadgets from '../Gadgets';
import Receipes from '../Receipes';
import TopRightColumn from '../../features/TopRightColumn/TopRightColumn';


const TopArticles = () => (

  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.topArticlesLeft}>
        <GlobalNews />
        <TravelGuides />
        <div className={styles.GadRecWrapper}>
          <div className={styles.Gadgets}>
            <Gadgets />
          </div>
          <div className={styles.Receipes}>
            <Receipes />
          </div>
        </div>
      </div>
      <div className={styles.topArticlesRight}>
        <TopRightColumn />
      </div>
    </div>
  </div>
);

export default TopArticles;
