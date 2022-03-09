/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Fitness.module.scss';
import { fitnessArticles, expandContentItems } from '../../db/testDataStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const Fitness = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>
          fitness
        </div>
        <div className={styles.sectionLine}></div>
        <div className={styles.expander}>     {/* EXPANDER START */}
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

      {fitnessArticles.map((fitnessArticle, index) => (
        <div className={styles.articleWrapper} key={index}>
          <div className={styles.photo}>
            <img src={fitnessArticle.image} alt={fitnessArticle.imageAlt} />
          </div>
          <div className={styles.articleDetailsWrapper}>
            <div className={styles.artTitle}>{fitnessArticle.artTitle}</div>
            <div className={styles.artDetailsDescriptionWrapper}>
              <div className={styles.artCat}>{fitnessArticle.artCat}</div>
              <div className={styles.editorData}>{fitnessArticle.artAuthor}</div>
              <div className={styles.date}>{fitnessArticle.artDate}</div>
            </div>
            <div className={styles.artLead}>{fitnessArticle.artLead}</div>
          </div>
        </div>
      ))}

      <div className={styles.arrows}>
        <div className={styles.arrowPrev}>
          <a href='#'>
            <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.arrowNext}>
          <a href="#">
            <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Fitness;
