import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Gaming.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Gaming = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.sectionTitle}>gaming</div>
        <div className={styles.expander}>
          <div className={styles.expanderText}>All</div>
          <div className={styles.expanderArrow}>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articlePhoto}>
          <img src="/images/articles/GamingMainArticlePhoto.jpg" alt="Gaming Main Article Photos" />
        </div>
        <div className={styles.articleTitle}>Microsoft to Start Gaming Development Systems in March</div>
      </div>
      <div className={styles.articleDetailsWrapper}>
        <div className={styles.articleDetails}>
          <div className={styles.articleCategory}>gaming</div>
          <div className={styles.editorDate}>David Lee</div>
          <div className={styles.articleDate}>05.02.2022</div>
        </div>
        <div className={styles.articleLead}>People live better in big houses and in big clothes. I try to contrast; life today is full of contrast. We have to change!...</div>

      </div>
    </div>


  </div>
);

export default Gaming;
