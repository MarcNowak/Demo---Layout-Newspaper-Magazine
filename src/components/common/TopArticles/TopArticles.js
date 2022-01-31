import React from 'react';
// import PropTypes from 'prop-types';

import GlobalNews from '../GlobalNews';
import TravelGuides from '../TravelGuides';
import Gadgets from '../Gadgets';
import Receipes from '../Receipes';


const TopArticles = () => (
  <div>
    <GlobalNews />
    <TravelGuides />
    <Gadgets />
    <Receipes />
  </div>
);

export default TopArticles;
