/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './TravelGuides.module.scss';
import { travelGuidesItems } from '../../db/testDataStore';

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

        {travelGuidesItems.map((travelGuidesItem, index) => (
          <div className={styles.tile01} key={index}>
            <img
              src={travelGuidesItem.image} alt={travelGuidesItem.imageAlt}
              title={travelGuidesItem.title}
            />
            <div className={styles.tileWrapper}>
              <div className={styles.tileCat}>
                {travelGuidesItem.tileCat}
              </div>
              <div className={styles.artTitle}>
                {travelGuidesItem.artTitle}
              </div>
            </div>
          </div>
        ))}

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
