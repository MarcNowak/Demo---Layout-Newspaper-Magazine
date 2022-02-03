import React from 'react';
import PropTypes from 'prop-types';

import styles from './Receipes.module.scss';

const Receipes = ({ children }) => (
  <div className={styles.root}>
    <div>
      <p>Receipes</p>
    </div>
  </div>
);

Receipes.propTypes = {
  children: PropTypes.node,
};

export default Receipes;