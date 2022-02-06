import React from 'react';
// import PropTypes from 'prop-types';

import BottomBarSocialList from '../../features/SocialMedia/BottomBarSocialList';

import styles from './BottomBar.module.scss';


const BottomBar = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.logo}>
          <img src="../../../../../images/mainlayout/newsMagazineLogoFooter.png" alt='FooterLogo' />
        </div>
        <div className={styles.bottomBarText}>
          Praesent quam turpis, ornare vel neque vel, congue lacinia dolor.
          Suspendisse euismod tincidunt arcu, at venenatis urna vulputate vel.
          Nam dignissim libero id lacus fringilla, ac pretium leo ornare.
          Donec viverra a lacus ut vehicula.
          Cras lobortis massa non lorem sodales, non fermentum tortor molestie.
          Praesent vel luctus odio.
          Donec feugiat justo vel nisl egestas, quis porttitor leo bibendum.
        </div>
        <div className={styles.contact}>Contact us: <a href="mailto:webmaster@example.com">webmaster@example.com</a></div>
        <BottomBarSocialList />
      </div>
    </div>
  </div>

  // <div>
  //   Bottom Bar
  //   <BottomBarSocialList />
  // </div>
);

// BottomBar.propTypes = {};

export default BottomBar;
