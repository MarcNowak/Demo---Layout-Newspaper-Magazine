import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/HomePage/HomePage';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route exact path={'/'} element={<Homepage />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
