/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Gadgets.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const Gadgets = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>
          gadgets
        </div>
        <div className={styles.sectionLine}></div>
      </div>
      <div className={styles.mainPhoto}>
        <img src="/images/articles/Gadgets01.jpg" alt="Gadgets01" />
      </div>
      <div className={styles.artCategory}>
        gadgets
      </div>
      <div className={styles.mainArtTitle}>
        Modular Systems Will Keep Your Smart Home from Becoming Obsolete
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
          <img src="/images/articles/Gadgets02.jpg" alt="Gadgets01" />
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.title}>
            Sneak Peak: Best Smart Home Gadgets & Features to Install Today
          </div>
          <div className={styles.artDate}>
            Jan 15, 2022
          </div>
        </div>
      </div>
      <div className={styles.artsWrapper}>
        <div className={styles.artPhoto}>
          <img src="/images/articles/Gadgets03.jpg" alt="Gadgets01" />
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.title}>
            Lights Guide for your Home: Ultimate LED vs. Old Generations
          </div>
          <div className={styles.artDate}>
            Jan 15, 2022
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

Gadgets.propTypes = {};

export default Gadgets;
