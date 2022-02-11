/* eslint-disable jsx-a11y/anchor-has-content */
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
  // faChevronDown,
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
          {/* TOP EXPAND MENU FASHION START*/}
          <div className={styles.expander}>
            <div className={styles.expanderArrow}>
              <a href='#'>
                <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon> {/* EXPANDER START */}
              </a>
            </div>
            <a href='#'>
              <div className={styles.expanderText}>Fashion</div>
            </a>
            <div className={styles.expandContent}>
              <ul>
                <li className={styles.hidden}>
                  <ul>
                    <li>
                      <a href='#'><img src='/images/mainlayout/expandMenu01.jpg' alt='01' /></a>
                    </li>
                    <li>
                      TRAVEL
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        Exotic Trips are Getting More and More Popular in South America
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href='#'><img src='/images/mainlayout/expandMenu02.jpg' alt='01' /></a>
                    </li>
                    <li>
                      TRAVEL
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        Out of This World Experience with these Exotic Travel Destinations
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className={styles.artCat}>
                      <a href='#'><img src='/images/mainlayout/expandMenu03.jpg' alt='01' /></a>
                    </li>
                    <li>
                      TRAVEL
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        Work Out as Much as Possible During Your All Inclusive Vacations
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className={styles.artCat}>
                      <a href='#'><img src='/images/mainlayout/expandMenu04.jpg' alt='01' /></a>
                    </li>
                    <li>
                      TRAVEL
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        Bali Travel Experience: Combine Luxury with a Real Life Adventure
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className={styles.artCat}>
                      <a href='#'><img src='/images/mainlayout/expandMenu05.jpg' alt='01' /></a>
                    </li>
                    <li>
                      TRAVEL
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        A Breakthough for This Year: Space Travel Might Become a Thing
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* TOP EXPAND MENU FASHION END*/}
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
