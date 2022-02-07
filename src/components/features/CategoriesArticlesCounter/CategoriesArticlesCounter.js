import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../CategoriesArticlesCounter/CategoriesArticlesCounter.module.scss';

const CategoriesArticlesCounter = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>categories</div>
      <div className={styles.categoriesWrapper}>
        <div className={styles.category}>Global</div>
        <div className={styles.total}>10</div>
      </div>
      <div className={styles.categoriesWrapper}>
        <div className={styles.category}>Art</div>
        <div className={styles.total}>10</div>
      </div>
      <div className={styles.categoriesWrapper}>
        <div className={styles.category}>Health</div>
        <div className={styles.total}>10</div>
      </div>
      <div className={styles.categoriesWrapper}>
        <div className={styles.category}>Music</div>
        <div className={styles.total}>10</div>
      </div>
      <div className={styles.categoriesWrapper}>
        <div className={styles.category}>Receipes</div>
        <div className={styles.total}>10</div>
      </div>
      <div className={styles.categoriesWrapper}>
        <div className={styles.category}>Travel</div>
        <div className={styles.total}>10</div>
      </div>
    </div>
  </div>
);

// CategoriesArticlesCounter.propTypes = {};

export default CategoriesArticlesCounter;
