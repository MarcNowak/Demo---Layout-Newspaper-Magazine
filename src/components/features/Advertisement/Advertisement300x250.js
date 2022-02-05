import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../Advertisement/Advertisement300x250.module.scss';

const Advertisement300x250 = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.title}>- Advertisement -</div>
      <div className={styles.banner300x250}>
        <img src="/../../images/mainlayout/banner300x250.jpg" alt="car" />
      </div>
    </div>
  </div>
);

// Advertisement300x250.propTypes = {};

export default Advertisement300x250;
