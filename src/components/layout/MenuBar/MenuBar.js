/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';
import { categories, articleTitle } from '../../../db/dataStore';

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
  faChevronDown,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const MenuBar = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <ul className={styles.menuButtons}>
        <li className={styles.lineHeight}>
          <a href='#'>
            <FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon><span>{categories.category09}</span>
          </a>
        </li>
        <li className={styles.lineHeight}>
          <a href='#'>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon><span>{categories.category07}</span>
          </a>
        </li>
        <li className={styles.lineHeight}>
          <a href='#'>
            <FontAwesomeIcon icon={faBicycle}></FontAwesomeIcon><span>{categories.category11}</span>
          </a>
        </li>
        <li className={styles.lineHeight}>
          {/* TOP EXPAND MENU FASHION START*/}
          <div className={styles.expander}>
            <div className={styles.test}>
              <a href='#'>
                <li className={styles.expanderArrow}>
                  <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon> {/* EXPANDER START */}
                </li>
                <li className={styles.expanderText}>{categories.category04}</li>
                <li className={styles.expanderArrow}>
                  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </li>
              </a>
            </div>
            <div className={styles.expandContent}>
              <ul>
                <li>
                  <ul>
                    <li>
                      <a href='#'><img src='/images/mainlayout/expandMenu01.jpg' alt='01' /></a>
                    </li>
                    <li>
                      {categories.category17}
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        {articleTitle.title01}
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href='#'><img src='/images/mainlayout/expandMenu02.jpg' alt='01' /></a>
                    </li>
                    <li>
                      {categories.category17}
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        {articleTitle.title02}
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className={styles.artCat}>
                      <a href='#'><img src='/images/mainlayout/expandMenu03.jpg' alt='01' /></a>
                    </li>
                    <li>
                      {categories.category17}
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        {articleTitle.title03}
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className={styles.artCat}>
                      <a href='#'><img src='/images/mainlayout/expandMenu04.jpg' alt='01' /></a>
                    </li>
                    <li>
                      {categories.category17}
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        {articleTitle.title04}
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className={styles.artCat}>
                      <a href='#'><img src='/images/mainlayout/expandMenu05.jpg' alt='01' /></a>
                    </li>
                    <li>
                      {categories.category17}
                    </li>
                    <li className={styles.artCat}>
                      <a href='#'>
                        {articleTitle.title05}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className={styles.arrows}>
                <ul>
                  <li>
                    <div className={styles.arrowPrev}>
                      <a href='#'>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.arrowNext}>
                      <a href="#">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </a>
                    </div>
                  </li>
                </ul>
              </ul>
              <ul className={styles.categories}>
                <li><a href='#'>{categories.category01}</a></li>
                <li>{categories.category02}</li>
                <li>{categories.category08}</li>
                <li>{categories.category14}</li>
                <li>{categories.category16}</li>
                <li>{categories.category17}</li>
                <li>{categories.category19}</li>
              </ul>
            </div>
          </div>
          {/* TOP EXPAND MENU FASHION END*/}
        </li>
        <li className={styles.lineHeight}>
          <a href='#'>
            <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon><span>{categories.category06}</span>
          </a>
        </li>
        <li className={styles.lineHeight}>
          <a href='#'>
            <FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon><span>{categories.category05}</span>
          </a>
        </li>
        <li className={styles.lineHeight}>
          <a href='#'>
            <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon><span>{categories.category18}</span>
          </a>
        </li>
        <li className={styles.lineHeight}>
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
