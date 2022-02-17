import React from 'react';
// import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

import Trending from '../../features/TrendingBar/TrendingBar';
import MostPopular from '../../features/MostPopular/MostPopular';
import TopArticles from '../../common/TopArticles/TopArticles';
import Tiles from '../../features/Tiles/Tiles';
import MiddleArticles  from '../../common/MiddleArticles/MiddleArticles';
import BottomArticles from '../../common/BottomArticles/BottomArticles';
import ReactPlayer from '../../features/Video/Video';

const HomePage = () => (
  <div className={styles.root}>
    <Trending />
    <MostPopular />
    <TopArticles />
    <Tiles />
    <MiddleArticles />
    <ReactPlayer />
    <BottomArticles />
  </div>
);

// HomePage.propTypes = {};

export default HomePage;
