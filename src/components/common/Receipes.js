/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Receipes.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const Receipes = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>
          receipes
        </div>
        <div className={styles.sectionLine}></div>
      </div>
      <div className={styles.mainPhoto}>
        <img src="/images/articles/Receipes01.jpg" alt="Gadgets01" />
      </div>
      <div className={styles.artCategory}>
        receipes
      </div>
      <div className={styles.mainArtTitle}>
        One of a Kind Traditional Bakeries Must Tries When You are staying in Morocco
      </div>
      <div className={styles.editorDataWrapper}>
        <div className={styles.editorData}>
          David Lee
        </div>
        <div className={styles.mainArtDate}>
          08.02.2022
        </div>
      </div>
      <div className={styles.artLead}>
        People live better in big houses and in big clothes.
        I try to contrast; life today is full of contrast.
        We have to change!...
      </div>
      <div className={styles.artsWrapper}>
        <div className={styles.artPhoto}>
          <img src="/images/articles/Receipes02.jpg" alt="Gadgets01" />
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.title}>
            Traveller’s Tip: Where to Find the Best Food Around Shanghai
          </div>
          <div className={styles.artDate}>
            07.02.2022
          </div>
        </div>
      </div>
      <div className={styles.artsWrapper}>
        <div className={styles.artPhoto}>
          <img src="/images/articles/Receipes03.jpg" alt="Gadgets01" />
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.title}>
            The Best Yummy Italian Pasta Receipe for All Food Travelers         </div>
          <div className={styles.artDate}>
            07.02.2022
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

// Receipes.propTypes = {
//   children: PropTypes.node,
// };

export default Receipes;
