import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MustRead.module.scss';

const MustRead = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>must read</div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleCategory}>style</div>
        <div className={styles.articleTitle}>What Makeup to Wear Daily, No Matter What You’ve Got Planned</div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.editorData}>David Lee</div>
          <div className={styles.articleDate}>04.02.2022</div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>must read</div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleCategory}>style</div>
        <div className={styles.articleTitle}>
          Style Spy: Fashion Model Goes Casual in Distinct and Original Way
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.editorData}>David Lee</div>
          <div className={styles.articleDate}>04.02.2022</div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>must read</div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleCategory}>style</div>
        <div className={styles.articleTitle}>
        Expert Advice: The Best Cheap Retro Chic Fashion for this Fall
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.editorData}>David Lee</div>
          <div className={styles.articleDate}>04.02.2022</div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>must read</div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleCategory}>style</div>
        <div className={styles.articleTitle}>
        Witnessing the Birth of the New Coronavirus Economy
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.editorData}>David Lee</div>
          <div className={styles.articleDate}>04.02.2022</div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>must read</div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleCategory}>style</div>
        <div className={styles.articleTitle}>
        Instagram Hair Ideas to Try: Inspirational Influencers to Follow
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.editorData}>David Lee</div>
          <div className={styles.articleDate}>04.02.2022</div>
        </div>
      </div>
    </div>
  </div>
);

export default MustRead;
