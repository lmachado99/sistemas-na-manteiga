import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './Routes'

import './App.css';
import Header from './components/header/Header';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
