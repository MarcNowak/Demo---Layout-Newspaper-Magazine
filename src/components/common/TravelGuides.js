import React from 'react';
import PropTypes from 'prop-types';

import styles from './TravelGuides.module.scss';

const TravelGuides = ({ children }) => (
  <div className={styles.root}>
    <div>
      <p>TravelGuides</p>
    </div>
  </div>
);

TravelGuides.propTypes = {
  children: PropTypes.node,
};

export default TravelGuides;
