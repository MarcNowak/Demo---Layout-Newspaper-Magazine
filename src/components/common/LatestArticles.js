/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './LatestArticles.module.scss';
import { latestArticlesItems } from '../../db/testDataStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const LatestArticles = () => (

  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>latest articles</div>
        <div className={styles.sectionLine}></div>
      </div>
      <div className={styles.rows}>

        {latestArticlesItems.map((latestArticlesItem, index) => (
          <div className={styles.articleWrapper} key={index}>
            <div className={styles.photo}>
              <img src={latestArticlesItem.image} alt={latestArticlesItem.imageAlt} />
            </div>
            <div className={styles.artCat}>
              {latestArticlesItem.artCat}
            </div>
            <div className={styles.artTitle}>
              {latestArticlesItem.artTitle}
            </div>
            <div className={styles.artDetailsWrapper}>
              <div className={styles.editorData}>
                {latestArticlesItem.artAuthor}
              </div>
              <div className={styles.date}>
                {latestArticlesItem.artDate}
              </div>
            </div>
          </div>
        ))}

      </div>
      <div className={styles.arrowWrapper}>
        <div className={styles.arrows}>
          <div className={styles.arrowPrev}>
            <a href='#'>
              1
            </a>
          </div>
          <div className={styles.arrowPrev}>
            <a href='#'>
              2
            </a>
          </div>
          <div className={styles.arrowPrev}>
            <a href='#'>
              3
            </a>
          </div>
          <div className={styles.dots}>
            ...
          </div>
          <div className={styles.arrowPrev}>
            <a href='#'>
              15
            </a>
          </div>
          <div className={styles.arrowNext}>
            <a href="#">
              <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className={styles.pages}>
          Page 1 of 15
        </div>
      </div>
    </div>
  </div>
);

export default LatestArticles;
