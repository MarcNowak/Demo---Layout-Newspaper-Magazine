import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import BottomBar from '../BottomBar/BottomBar';
import Footer from '../Footer/Footer';


const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <BottomBar />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
