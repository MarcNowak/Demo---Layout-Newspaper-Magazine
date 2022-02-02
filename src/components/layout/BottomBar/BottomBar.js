import React from 'react';
import PropTypes from 'prop-types';
import BottomBarSocialList from '../../features/SocialMedia/BottomBarSocialList';

import styles from './BottomBar.module.scss';


const BottomBar = ({ children }) => (
  <div>
    {children}
    Bottom Bar
    <BottomBarSocialList />
  </div>
);

BottomBar.propTypes = {
  children: PropTypes.node,
};

export default BottomBar;
