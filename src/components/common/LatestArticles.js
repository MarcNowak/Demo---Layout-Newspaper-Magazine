import React from 'react';
// import PropTypes from 'prop-types';

import styles from './LatestArticles.module.scss';

const LatestArticles = () => (

  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        latest articles
      </div>
      <div className={styles.rows}>
        <div className={styles.articleWrapper}>
          <div className={styles.photo}>
            <img src='/images/articles/Latest01.jpg' alt='L 01' />
          </div>
          <div className={styles.artCat}>
            fitness
          </div>
          <div className={styles.artTitle}>
            The Travel Insurance Catch that can Double Your Cover in Two Months
          </div>
          <div className={styles.artDetailsWrapper}>
            <div className={styles.editorData}>
              David Lee
            </div>
            <div className={styles.date}>
              - February 8, 2022
            </div>
          </div>
        </div>
        <div className={styles.articleWrapper}>
          <div className={styles.photo}>
            <img src='/images/articles/Latest02.jpg' alt='L 01' />
          </div>
          <div className={styles.artCat}>
            fitness
          </div>
          <div className={styles.artTitle}>
            The Weirdest Places Ashes Have Been Scattered in South America
          </div>
          <div className={styles.artDetailsWrapper}>
            <div className={styles.editorData}>
              David Lee
            </div>
            <div className={styles.date}>
              - February 8, 2022
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rows}>
        <div className={styles.articleWrapper}>
          <div className={styles.photo}>
            <img src='/images/articles/Latest03.jpg' alt='L 01' />
          </div>
          <div className={styles.artCat}>
            fitness
          </div>
          <div className={styles.artTitle}>
            These Fabulous Photos Will Have Astonishing Impact for Any Campaign
          </div>
          <div className={styles.artDetailsWrapper}>
            <div className={styles.editorData}>
              David Lee
            </div>
            <div className={styles.date}>
              - February 8, 2022
            </div>
          </div>
        </div>
        <div className={styles.articleWrapper}>
          <div className={styles.photo}>
            <img src='/images/articles/Latest04.jpg' alt='L 01' />
          </div>
          <div className={styles.artCat}>
            fitness
          </div>
          <div className={styles.artTitle}>
            Watch Awesome Kate Manner Go Full Dancing Pro in Peru this Week
          </div>
          <div className={styles.artDetailsWrapper}>
            <div className={styles.editorData}>
              David Lee
            </div>
            <div className={styles.date}>
              - February 8, 2021
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rows}>
        <div className={styles.articleWrapper}>
          <div className={styles.photo}>
            <img src='/images/articles/Latest05.jpg' alt='L 01' />
          </div>
          <div className={styles.artCat}>
            fitness
          </div>
          <div className={styles.artTitle}>
            Small Yacht Market Affected by the Fulminant Slashed Investments
          </div>
          <div className={styles.artDetailsWrapper}>
            <div className={styles.editorData}>
              David Lee
            </div>
            <div className={styles.date}>
              - February 8, 2022
            </div>
          </div>
        </div>
        <div className={styles.articleWrapper}>
          <div className={styles.photo}>
            <img src='/images/articles/Latest06.jpg' alt='L 01' />
          </div>
          <div className={styles.artCat}>
            fitness
          </div>
          <div className={styles.artTitle}>
            Microsoft to Start Gaming Development Systems in March
          </div>
          <div className={styles.artDetailsWrapper}>
            <div className={styles.editorData}>
              David Lee
            </div>
            <div className={styles.date}>
              - February 8, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LatestArticles;
