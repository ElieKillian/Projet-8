import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import House from './pages/House';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode> 
    <Router>
      <div className='router'>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/logements/:id" element={<House />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
