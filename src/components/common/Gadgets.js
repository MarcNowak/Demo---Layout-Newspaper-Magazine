import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gadgets.module.scss';

const Gadgets = ({ children }) => (
  <div className={styles.root}>
    <div>
      <p>Gadgets</p>
    </div>
  </div>
);

Gadgets.propTypes = {
  children: PropTypes.node,
};

export default Gadgets;
