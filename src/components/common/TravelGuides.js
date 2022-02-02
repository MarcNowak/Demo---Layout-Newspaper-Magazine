import React from 'react';
import PropTypes from 'prop-types';

import styles from './TravelGuides.module.scss';

const TravelGuides = ({ children }) => (
  <footer className={styles.root}>
    <div>
      <p>TravelGuides</p>
    </div>
  </footer>
);

TravelGuides.propTypes = {
  children: PropTypes.node,
};

export default TravelGuides;
