/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

import styles from './TrendingBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const TrendingBar = () => (
  <div className={styles.root}>
    <Grid>
      <Row beetween='md' middle='xs'>
        <Col md={4} lg={2}>
          <div className={styles.trendingNow}>
            <span>trending now</span>
          </div>
        </Col>
        <Col md={6} lg={8}>
          <div className={styles.trendingDesc}>
            <span>The Weirdest Places Ashes Have Been Scattered in South America</span>
          </div>
        </Col>
        <Col md={4} lg={2}>
          <div className={styles.prevNext}>
            <a href='#'>
              <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
            </a>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default TrendingBar;
