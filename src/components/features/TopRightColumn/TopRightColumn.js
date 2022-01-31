import React from 'react';
// import PropTypes from 'prop-types';

import SocialList from '../SocialMedia/SocialList';
import Advertising from '../Advertisement/Advertisement300x250';
import MostPopular from '../MostPopular/MostPopular';


const MainLayout = () => (
  <div>
    <SocialList />
    <Advertising />
    <MostPopular />
  </div>
);

export default MainLayout;
