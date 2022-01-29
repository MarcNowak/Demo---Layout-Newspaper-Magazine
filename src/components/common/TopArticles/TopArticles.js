import React from 'react';
// import PropTypes from 'prop-types';

import GlobalNews from '../GlobalNews/GlobalNews';
import TravelGuides from '../TravelGuides/TravelGuides';
import Gadgets from '../Gadgets/Gadgets';
import Receipes from '../Receipes/Receipes';


const TopArticles = () => (
  <div>
    <GlobalNews />
    <TravelGuides />
    <Gadgets />
    <Receipes />
  </div>
);

export default TopArticles;
