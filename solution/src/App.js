import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';

import Header from './components/Header';
import Footer from './components/Footer';

import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
