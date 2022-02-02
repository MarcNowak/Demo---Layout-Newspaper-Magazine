import React from 'react';
import PropTypes from 'prop-types';

import styles from './GlobalNews.module.scss';

const GlobalNews = ({ children }) => (
  <footer className={styles.root}>
    <div>
      <p>GlobalNews</p>
    </div>
  </footer>
);

GlobalNews.propTypes = {
  children: PropTypes.node,
};

export default GlobalNews;
