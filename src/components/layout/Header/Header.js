import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBar';
import LogoBar from '../LogoBar/LogoBar';
import MenuBar from '../MenuBar/MenuBar';

const Header = props => (
  <header className={styles.root}>
    <TopBar />
    <LogoBar />
    <MenuBar />
  </header>
);

// Header.propTypes = {};

export default Header;
