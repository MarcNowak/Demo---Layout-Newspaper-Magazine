import React from 'react';
import PropTypes from 'prop-types';

import styles from './GlobalNews.module.scss';

const GlobalNews = ({ children }) => (
  <div className={styles.root}>
    <div>
      <p>GlobalNews</p>
    </div>
  </div>
);

GlobalNews.propTypes = {
  children: PropTypes.node,
};

export default GlobalNews;
