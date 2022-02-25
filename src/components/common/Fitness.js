/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Fitness.module.scss';

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
      <div className={styles.articleWrapper}>
        <div className={styles.photo}>
          <img src='/images/articles/Fitness01.jpg' alt='F 01' />
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.artTitle}>
            British Study: Daily Workouts Help you Cope Better with Stress
          </div>
          <div className={styles.artDetailsDescriptionWrapper}>
            <div className={styles.artCat}> fitness</div>
            <div className={styles.editorData}>David Lee</div>
            <div className={styles.date}>- June 8, 2022</div>
          </div>
          <div className={styles.artLead}>
            People live better in big houses and in big clothes.
            I try to contrast; life today is full of contrast.
            We have to change!...
          </div>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.photo}>
          <img src='/images/articles/Fitness02.jpg' alt='F 01' />
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.artTitle}>
            10 Steps to Make to be Successful in Bodybuilding and in Life
          </div>
          <div className={styles.artDetailsDescriptionWrapper}>
            <div className={styles.artCat}> fitness</div>
            <div className={styles.editorData}>David Lee</div>
            <div className={styles.date}>- June 8, 2022</div>
          </div>
          <div className={styles.artLead}>
            People live better in big houses and in big clothes.
            I try to contrast; life today is full of contrast.
            We have to change!...
          </div>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.photo}>
          <img src='/images/articles/Fitness03.jpg' alt='F 01' />
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.artTitle}>
            Discover How Physical Exercises Make your Brain Work Better
          </div>
          <div className={styles.artDetailsDescriptionWrapper}>
            <div className={styles.artCat}> fitness</div>
            <div className={styles.editorData}>David Lee</div>
            <div className={styles.date}>- June 8, 2022</div>
          </div>
          <div className={styles.artLead}>
            People live better in big houses and in big clothes.
            I try to contrast; life today is full of contrast.
            We have to change!...
          </div>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.photo}>
          <img src='/images/articles/Fitness04.jpg' alt='F 01' />
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.artTitle}>
            How to Transform your Weight Loss Routine into a Lifestyles
          </div>
          <div className={styles.artDetailsDescriptionWrapper}>
            <div className={styles.artCat}> fitness</div>
            <div className={styles.editorData}>David Lee</div>
            <div className={styles.date}>- June 8, 2022</div>
          </div>
          <div className={styles.artLead}>
            People live better in big houses and in big clothes.
            I try to contrast; life today is full of contrast.
            We have to change!...
          </div>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.photo}>
          <img src='/images/articles/Fitness05.jpg' alt='F 01' />
        </div>
        <div className={styles.articleDetailsWrapper}>
          <div className={styles.artTitle}>
            Be Aware: Excessive Excersise Could Do You a Lot of Damage
          </div>
          <div className={styles.artDetailsDescriptionWrapper}>
            <div className={styles.artCat}> fitness</div>
            <div className={styles.editorData}>David Lee</div>
            <div className={styles.date}>- June 8, 2022</div>
          </div>
          <div className={styles.artLead}>
            People live better in big houses and in big clothes.
            I try to contrast; life today is full of contrast.
            We have to change!...
          </div>
        </div>
      </div>
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
