/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MostPopular.module.scss';

const MostPopular = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.leftSidePicture}>
        <div className={styles.bigPicture}>
          <div className={styles.articleDescriptionWrapper}>
            <div className={styles.postCategory}>style</div>
            <div className={styles.leftSideTitle}>
              What Makeup to Wear Daily, No Matter What You’ve Got Planned
            </div>
            <div className={styles.editorDate}>David Lee = June 3, 2020</div>
          </div>
        </div>
      </div>
      <div className={styles.rightSidePicture}>
        <div className={styles.upperRow}>
          <p className={styles.smallPicture01}>What Makeup to Wear Daily, No Matter What You’ve Got Planned</p>
          <p className={styles.smallPicture02}>Work Out as Much as Possible During Your All Inclusive Vacations</p>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.smallPicture03}>Expert Advice: The Best Cheap Retro Chic Fashion for this Fall</p>
          <p className={styles.smallPicture04}>Bloggers Hijacked the Industry, Cutting a Piece of Earnings</p>
        </div>
      </div>
    </div>
  </div>
);

export default MostPopular;
