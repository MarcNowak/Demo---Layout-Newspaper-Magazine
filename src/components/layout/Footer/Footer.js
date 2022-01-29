import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({ children }) => (
  <footer>
    <p>FOOTER</p>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
