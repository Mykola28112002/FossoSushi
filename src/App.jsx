import './App.css';
import css from './styles.module.scss';
import React from 'react';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUsPage';
import Contact from './pages/ContactPage';
import Order from './pages/OrderPage';

const App = () => {
  return (
    <div className={css.app}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
    </div>
  );
}

export default App;
