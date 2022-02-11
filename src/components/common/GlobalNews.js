/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './GlobalNews.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const GlobalNews = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>
          Global News
        </div>
        <div className={styles.expander}> {/* EXPANDER START */}
          <div className={styles.expanderText}>All</div>
          <div className={styles.expanderArrow}>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </div>
          <div className={styles.expandContent}>
            <ul>
              <li><a href='#'>All</a></li>
              <li><a href='#'>Global</a></li>
              <li><a href='#'>Showbiz</a></li>
              <li><a href='#'>Gadgets</a></li>
              <li><a href='#'>Fitness</a></li>
            </ul>
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
          <div className={styles.rightArticleWrapper}>
            <div className={styles.articlePhoto}>
              <img src='images/articles/GlobalNews-01.jpg' alt='GlobalArticlePhoto' />
            </div>
            <div className={styles.rightArtDecsriptionWrapper}>
              <div className={styles.rightArtEditorData}>
                More and More People Stay Home as Coronavirus Spreads
              </div>
              <div className={styles.rightEditorData}>
                February 7, 2022
              </div>
            </div>
          </div>
          <div className={styles.rightArticleWrapper}>
            <div className={styles.articlePhoto}>
              <img src='images/articles/GlobalNews-02.jpg' alt='GlobalArticlePhoto' />
            </div>
            <div className={styles.rightArtDecsriptionWrapper}>
              <div className={styles.rightArtEditorData}>
               The Real Economy Has Never Been Tested by a Pandemic
              </div>
              <div className={styles.rightEditorData}>
                February 7, 2022
              </div>
            </div>
          </div>
          <div className={styles.rightArticleWrapper}>
            <div className={styles.articlePhoto}>
              <img src='images/articles/GlobalNews-03.jpg' alt='GlobalArticlePhoto' />
            </div>
            <div className={styles.rightArtDecsriptionWrapper}>
              <div className={styles.rightArtEditorData}>
               How to Think and Act in the Plummeting Stock Market
              </div>
              <div className={styles.rightEditorData}>
                February 7, 2022
              </div>
            </div>
          </div>
          <div className={styles.rightArticleWrapper}>
            <div className={styles.articlePhoto}>
              <img src='images/articles/GlobalNews-04.jpg' alt='GlobalArticlePhoto' />
            </div>
            <div className={styles.rightArtDecsriptionWrapper}>
              <div className={styles.rightArtEditorData}>
                H&M’s Fashion Photoshoot Campaign is the Coolest Thing We’ve Seen
              </div>
              <div className={styles.rightEditorData}>
                February 7, 2022
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
);

GlobalNews.propTypes = {};

export default GlobalNews;
