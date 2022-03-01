/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';
import { categories, articleTitle, authorName } from '../../../db/dataStore';

import styles from './MostPopular.module.scss';

const MostPopular = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.leftSidePictureContainer}>
        <div className={styles.leftPhoto}>
          <img src='images/articles/MostPopular_bigPicture.jpg' alt='01' />
        </div>
        <div className={styles.articleDescriptionWrapper}>
          <div className={styles.postCategory}>{categories.category21}</div>
          <div className={styles.leftSideTitle}><h3>{articleTitle.title06}</h3></div>
          <div className={styles.editorDate}>{authorName.author01} - June 3, 2020</div>
        </div>
      </div>
      <div className={styles.rightSidePictureContainer}>
        <div className={styles.articleWrapper01}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto01.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>{categories.category17}</div>
            <div className={styles.rightSideTitle}>{articleTitle.title07}</div>
          </div>
        </div>
        <div className={styles.articleWrapper02}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto02.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>{categories.category21}</div>
            <div className={styles.rightSideTitle}>{articleTitle.title08}</div>
          </div>
        </div>
        <div className={styles.articleWrapper03}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto03.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>{categories.category20}</div>
            <div className={styles.rightSideTitle}>{articleTitle.title09}</div>
          </div>
        </div>
        <div className={styles.articleWrapper04}>
          <div className={styles.rightPhoto}>
            <img src='images/articles/MostPopular_smallPhoto04.jpg' alt='01' />
          </div>
          <div className={styles.artDetails}>
            <div className={styles.postCategory}>{categories.category21}</div>
            <div className={styles.rightSideTitle}>{articleTitle.title10}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MostPopular;
