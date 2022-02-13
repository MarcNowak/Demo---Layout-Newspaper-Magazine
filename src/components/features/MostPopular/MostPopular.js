/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MostPopular.module.scss';

const MostPopular = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.leftSidePictureContainer}>
        <div className={styles.leftPhoto}>
          <img src='images/articles/MostPopular_bigPicture.jpg' alt='01' />
        </div>
        <div className={styles.articleDescriptionWrapper}>
          <div className={styles.postCategory}>style</div>
          <div className={styles.leftSideTitle}><h3>What Makeup to Wear Daily, No Matter What You’ve Got Planned</h3></div>
          <div className={styles.editorDate}>David Lee - June 3, 2020</div>
        </div>
      </div>
      <div className={styles.rightSidePictureContainer}>
        <div className={styles.articleWrapper01}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto01.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>travel</div>
            <div className={styles.rightSideTitle}>Work Out as Much as Possible During Your All Inclusive Vacations</div>
          </div>
        </div>
        <div className={styles.articleWrapper02}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto02.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>style</div>
            <div className={styles.rightSideTitle}>Expert Advice: The Best Cheap Retro Chic Fashion for this Fall</div>
          </div>
        </div>
        <div className={styles.articleWrapper03}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto03.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>showbiz</div>
            <div className={styles.rightSideTitle}>Bloggers Hijacked the Industry, Cutting a Piece of Earnings</div>
          </div>
        </div>
        <div className={styles.articleWrapper04}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto04.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>facts</div>
            <div className={styles.rightSideTitle}>The Weirdest Places Ashes Have Been Scattered in South America</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MostPopular;
