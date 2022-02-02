import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gadgets.module.scss';

const Gadgets = ({ children }) => (
  <footer className={styles.root}>
    <div>
      <p>Gadgets</p>
    </div>
  </footer>
);

Gadgets.propTypes = {
  children: PropTypes.node,
};

export default Gadgets;
