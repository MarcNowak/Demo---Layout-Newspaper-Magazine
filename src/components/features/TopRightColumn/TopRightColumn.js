import React from 'react';
// import PropTypes from 'prop-types';

import SocialList from '../SocialMedia/SocialList';
import Advertisement300x250 from '../Advertisement/Advertisement300x250';
import MostShared from '../MostShared/MostShared';


const TopRightColumn = () => (
  <div>
    <SocialList />
    <Advertisement300x250 />
    <MostShared />
  </div>
);

export default TopRightColumn;
