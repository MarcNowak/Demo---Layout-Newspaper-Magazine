import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Tiles.module.scss';

const Tiles = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.tilesWrapper}>

        <div className={styles.tile01}>
          <img
            src='images/articles/Tiles_01.jpg' alt='TG 01'
            title='Beauty Model Working on New Photoshoot on North Thailand Beach'
          />
          <div className={styles.tileWrapper}>
            <div className={styles.tileCat}>
              lifestyle
            </div>
            <div className={styles.artTitle}>
              Beauty Model Working on New Photoshoot on North Thailand Beach
            </div>
            <div className={styles.editorData}>
              David Lee - Feb 7, 2022
            </div>
          </div>
        </div>
        <div className={styles.tile01}>
          <img
            src='images/articles/Tiles_02.jpg' alt='TG 01'
            title='Victoria’s Secret Afterparty Goes Off with a Bang This Year'
          />
          <div className={styles.tileWrapper}>
            <div className={styles.tileCat}>
              travel
            </div>
            <div className={styles.artTitle}>
              Victoria’s Secret Afterparty Goes Off with a Bang Bang Bang Bang This Year
            </div>
            <div className={styles.editorData}>
              David Lee - Feb 7, 2022
            </div>
          </div>
        </div>
        <div className={styles.tile01}>
          <img
            src='images/articles/Tiles_03.jpg' alt='TG 01'
            title='Sisters Land Fashion Role on the Cover of Bestseller Magazine'
          />
          <div className={styles.tileWrapper}>
            <div className={styles.tileCat}>
              lifestyle
            </div>
            <div className={styles.artTitle}>
              Sisters Land Fashion Role on the Cover of Bestseller of Bestseller Magazine
            </div>
            <div className={styles.editorData}>
              David Lee - Feb 7, 2022
            </div>
          </div>
        </div>
        <div className={styles.tile01}>
          <img
            src='images/articles/Tiles_04.jpg' alt='TG 01'
            title='Amazing Model On Site in Ibiza, on the Best Rated Photo Location'
          />
          <div className={styles.tileWrapper}>
            <div className={styles.tileCat}>
              travel
            </div>
            <div className={styles.artTitle}>
              Amazing Model On Site in Ibiza, on the Best Rated Photo Location
            </div>
            <div className={styles.editorData}>
              David Lee - Feb 7, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tiles;
