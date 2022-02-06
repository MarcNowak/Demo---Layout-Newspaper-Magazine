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
      <ul className={styles.menuButtons}>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon><span>Home</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon><span>Global</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faBicycle}></FontAwesomeIcon><span>Lifestyle</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon><span>Fashion</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon><span>Gaming</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon><span>Fitness</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon><span>Video</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span>More</span>
          </a>
        </li>
      </ul>
      <div className={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </div>
    </div>
    <div className={styles.separator}></div>
  </div>
);

// MenuBar.propTypes = {};

export default MenuBar;
