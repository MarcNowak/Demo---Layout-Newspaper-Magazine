import React from 'react';
// import PropTypes from 'prop-types';

import TopArticles from '../../common/TopArticles/TopArticles';
import TopRightColumn from '../TopRightColumn/TopRightColumn';


const TopSectionWrapper = () => (
  <div>
    <TopArticles />
    <TopRightColumn />
    {/* <MostPopular />  duplicated. Modification nedded */}
  </div>
);

export default TopSectionWrapper;
