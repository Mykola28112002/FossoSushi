import React from 'react';
import ModalMenu from '../components/ModalMenu/ModalMenu';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Hero from '../components/Hero/Hero';
import Delivery from '../components/Deliveri/Delivery';
import Recommend from '../components/Recommend/Recommend';
import Footer from '../components/Footer/Footer';
import AboutUs from '../components/AboutUs/AboutUs';

function HomePage() {  
  
  return (
    <>
      <ModalMenu />
      <Header type={'home'} />
      <Logo />
      <Hero />
      <Delivery />
      <AboutUs />
      <Recommend />
      <Footer/>
    </>
  );
}

export default HomePage;