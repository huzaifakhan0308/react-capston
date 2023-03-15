import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Detail from './components/detail';
import './styles/App.css';

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="App-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
