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
          <div className={styles.smallPicture01}>
            <div className={styles.smallPicture01Cat}>travel</div>
            <div className={styles.smallPicture01Desc}>What Makeup to Wear Daily, No Matter What You’ve Got Planned</div>
          </div>
          <div className={styles.smallPicture02}>
            <div className={styles.smallPicture02Cat}>style</div>
            <div className={styles.smallPicture02Desc}>Work Out as Much as Possible During Your All Inclusive Vacations</div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.smallPicture03}>
            <div className={styles.smallPicture03Cat}>show biz</div>
            <div className={styles.smallPicture03Desc}>Expert Advice: The Best Cheap Retro Chic Fashion for this Fall</div>
          </div>
          <div className={styles.smallPicture04}>
            <div className={styles.smallPicture04Cat}>facts</div>
            <div className={styles.smallPictureDesc}>Bloggers Hijacked the Industry, Cutting a Piece of Earnings</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MostPopular;
