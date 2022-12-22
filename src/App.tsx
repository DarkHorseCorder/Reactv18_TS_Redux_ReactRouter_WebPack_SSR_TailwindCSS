import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';

import './App.css';

import HomePage from './pages/Home'
import CounterPage from './pages/CounterPage'
function App() {
  return (
    <div className="flex item-center justify-center text-center">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/counter' element={<CounterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
