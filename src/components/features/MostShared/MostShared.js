/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MostShared.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const MostShared = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>most shared</div>
      <div className={styles.articleWrapper}>
        <div className={styles.photo}>
        </div>
        <div className={styles.artDescWrapper}>
          <div className={styles.artCat}>style</div>
          <div className={styles.artTitle}>
            What Makeup to Wear Daily, No Matter What You’ve Got Planned
          </div>
        </div>
      </div>

      <div className={styles.articleWrapper}>
        <div className={styles.photo01}>
        </div>
        <div className={styles.artDescWrapper}>
          <div className={styles.artCat}>fitness</div>
          <div className={styles.artTitle}>
            Style Spy: Fashion Model Goes Casual in Distinct and Original
          </div>
        </div>
      </div>

      <div className={styles.articleWrapper}>
        <div className={styles.photo02}>
        </div>
        <div className={styles.artDescWrapper}>
          <div className={styles.artCat}>global</div>
          <div className={styles.artTitle}>
            Expert Advice: The Best Cheap Retro Chic Fashion for this Fall
          </div>
        </div>
      </div>


      <div className={styles.articleWrapper}>
        <div className={styles.photo03}>
        </div>
        <div className={styles.artDescWrapper}>
          <div className={styles.artCat}>gadgets</div>
          <div className={styles.artTitle}>
            Witnessing the Birth of the New Coronavirus Economy
          </div>
        </div>
      </div>

      <div className={styles.articleWrapper}>
        <div className={styles.photo04}>
        </div>
        <div className={styles.artDescWrapper}>
          <div className={styles.artCat}>lifestyle</div>
          <div className={styles.artTitle}>
            Instagram Hair Ideas to Try: Inspirational Influencers to Follow
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

// MostShared.propTypes = {
//   children: PropTypes.node,
// };

export default MostShared;
