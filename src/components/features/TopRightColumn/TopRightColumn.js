import React from 'react';
// import PropTypes from 'prop-types';

import SocialList from '../SocialMedia/SocialList';
import Advertisement300x250 from '../Advertisement/Advertisement300x250';
import MostPopular from '../MostPopular/MostPopular';


const TopRightColumn = () => (
  <div>
    <SocialList />
    <Advertisement300x250 />
    {/* <MostPopular />  duplicated. Modification nedded */}
  </div>
);

export default TopRightColumn;
