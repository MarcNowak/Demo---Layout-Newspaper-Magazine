/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../MenuBar/MenuBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseUser,
  faGlobe,
  faBicycle,
  faUserTie,
  faMicrochip,
  faHeartbeat,
  faVideo,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const MenuBar = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.menuButton}>
        <a href='#'>
          <FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon><p>Home</p>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon><p>Global</p>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faBicycle}></FontAwesomeIcon><p>Lifestyle</p>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon><p>Fashion</p>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon><p>Gaming</p>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon><p>Fitness</p>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon><p>Video</p>
        </a>
        <a href='#'>
          <p>More</p>
        </a>
      </div>
      <div className={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </div>
    </div>
  </div>
);

// MenuBar.propTypes = {};

export default MenuBar;
