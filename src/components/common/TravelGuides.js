/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './TravelGuides.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const TravelGuides = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>
          travel guides
        </div>
        <div className={styles.sectionLine}></div>
      </div>
      <div className={styles.tilesWrapper}>

        <div className={styles.tile01}>
          <img
            src='images/articles/TravelGuides-01.jpg' alt='TG 01'
            title='Out of This World Experience with these Exotic Travel Destinations'
          />
          <div className={styles.tileWrapper}>
            <div className={styles.tileCat}>
              travel
            </div>
            <div className={styles.artTitle}>
              Out of This World Experience with these Exotic Travel Destinations
            </div>
          </div>
        </div>
        <div className={styles.tile01}>
          <img
            src='images/articles/TravelGuides-02.jpg' alt='TG 01'
            title='Bali Travel Experience: Combine Luxury with a Real Life Adventure'
          />
          <div className={styles.tileWrapper}>
            <div className={styles.tileCat}>
              travel
            </div>
            <div className={styles.artTitle}>
              Bali Travel Experience: Combine Luxury with a Real Life Adventure
            </div>
          </div>
        </div>
        <div className={styles.tile01}>
          <img
            src='images/articles/TravelGuides-03.jpg' alt='TG 01'
            title='Work Out as Much as Possible During Your All Inclusive Vacations'
          />
          <div className={styles.tileWrapper}>
            <div className={styles.tileCat}>
              travel
            </div>
            <div className={styles.artTitle}>
              Work Out as Much as Possible During Your All Inclusive Vacations
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <div className={styles.arrowPrev}>
          <a href='#'>
            <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.arrowNext}>
          <a href="#">
            <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  </div>

);

// TravelGuides.propTypes = {};

export default TravelGuides;
