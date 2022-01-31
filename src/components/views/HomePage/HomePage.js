import React from 'react';
// import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

import Trending from '../../features/TrendingBar/TrendingBar';
import MostPopular from '../../features/MostPopular/MostPopular';
import TopArticles from '../../common/TopArticles/TopArticles';
import TopRightColumn from '../../features/TopRightColumn/TopRightColumn';
import Tiles from '../../features/Tiles/Tiles';
import MiddleArticles  from '../../common/MiddleArticles/MiddleArticles';
import MiddleRightColumn from '../../features/MiddleRightColumn/MiddleRightColumn';
import Video from '../../features/Video/Video';
import LatestArticles from '../../common/LatestArticles/LatestArticles';
import BottomRightColumn from '../../features/BottomRightColumn/BottomRightColumn';


const HomePage = () => (
  <div className={styles.root}>
    <Trending />
    <MostPopular />
    <TopArticles />
    <TopRightColumn />
    <Tiles />
    <MiddleArticles />
    <MiddleRightColumn />
    <Video />
    <LatestArticles />
    <BottomRightColumn />
  </div>
);

// HomePage.propTypes = {};

export default HomePage;
