import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/HomePage/HomePage';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Route exact path={'/'} component={Homepage} />
    </MainLayout>
  </BrowserRouter>
);

export default App;
