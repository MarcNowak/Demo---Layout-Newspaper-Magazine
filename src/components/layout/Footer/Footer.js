/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import styles from './Footer.module.scss';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <Grid>
      <Row beetween='md' middle='xs'>
        <Col md={6} lg={6}>
          <div className={styles.leftSide}>
            <span>© Copyright - Newspaper Wordpress Theme by TagDiv</span>
          </div>
        </Col>
        <Col md={6} lg={6}>
          <div className={styles.rightSide}>
            <ul>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
