/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './GlobalNews.module.scss';
import {
  expandContentItems,
  globalNewsArticles,
} from '../../db/testDataStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const GlobalNews = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>
          Global News
        </div>
        <div className={styles.sectionLine}></div>
        <div className={styles.expander}> {/* EXPANDER START */}
          <div className={styles.expanderText}>All</div>
          <div className={styles.expanderArrow}>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </div>
          <div className={styles.expandContent}>

            {expandContentItems.map((expandContentItem, index) => (
              <ul key={index}>
                <li>
                  <a href={expandContentItem.href}>{expandContentItem.label}</a>
                </li>
              </ul>
            ))}

          </div>
        </div>    {/* EXPANDER END */}
      </div>
      <div className={styles.articlesWrapper}>
        <div className={styles.leftArticleWrapper}>
          <div className={styles.bigPhoto}>
            <img src='images/articles/GlobalNewsMainArticlePhoto.jpg' alt="GlobalMainPhoto" />
          </div>
          <div className={styles.articleDescriptionWrapper}>
            <div className={styles.artCategory}>
              global
            </div>
            <div className={styles.artTitle}>
              Witnessing the Birth of the New Coronavirus Economy
            </div>
            <div className={styles.editorData}>
              David Lee - 07.02.2022  {/* dodać sekcję dla daty */}
            </div>
            <div className={styles.artLead}>
              People live better in big houses and in big clothes.
              I try to contrast; life today is full of contrast. We have to change!...
            </div>
          </div>
        </div>
        <div className={styles.rightArticlesWrapper}>

          {globalNewsArticles.map((globalNewsArticle, index) => (
            <div className={styles.rightArticleWrapper} key={index}>
              <div className={styles.articlePhoto}>
                <img src={globalNewsArticle.image} alt={globalNewsArticle.imageAlt} />
              </div>
              <div className={styles.rightArtDecsriptionWrapper}>
                <div className={styles.rightArtEditorData}>
                  {globalNewsArticle.artTitle}
                </div>
                <div className={styles.rightEditorData}>
                  {globalNewsArticle.artDate}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  </div>
);

GlobalNews.propTypes = {};

export default GlobalNews;
