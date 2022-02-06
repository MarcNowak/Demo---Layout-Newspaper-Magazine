import React from 'react';
import PropTypes from 'prop-types';

import styles from './GlobalNews.module.scss';

const GlobalNews = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        SECTION TITLE
      </div>
      <div className={styles.leftArticleWrapper}>
        <div className={styles.mainArticlePhoto}>
          MAIN PHOTO
        </div>
        <div className={styles.articleDetails}>
          <div className={styles.articleCetegory}>
            article category
          </div>
          <div className={styles.articleTitle}>
            Article Title
          </div>
          <div className={styles.editorDate}>
            Editor Date
          </div>
          <div className={styles.articleLead}>
            Article Lead
          </div>
        </div>
      </div>

    </div>
  </div>
);

GlobalNews.propTypes = {
  children: PropTypes.node,
};

export default GlobalNews;
