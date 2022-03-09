/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MostShared.module.scss';
import { mostSharedItems } from '../../../db/testDataStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';


const MostShared = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>most shared</div>
        <div className={styles.sectionLine}></div>
      </div>

      {mostSharedItems.map((mostSharedItem, index) => (
        <div className={styles.articleWrapper} key={index}>
          <div className={styles.photo}>
            <img src={mostSharedItem.image} alt={mostSharedItem.imageAlt} />
          </div>
          <div className={styles.artDescWrapper}>
            <div className={styles.artCat}>{mostSharedItem.artCat}</div>
            <div className={styles.artTitle}>{mostSharedItem.artTitle}</div>
          </div>
        </div>
      ))}

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

// MostShared.propTypes = {
//   children: PropTypes.node,
// };

export default MostShared;
