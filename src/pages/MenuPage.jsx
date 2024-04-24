import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ModalMenu from '../components/ModalMenu/ModalMenu';
import MenuList from '../components/MenuList/MenuList';
import Allergens from '../components/Allergens/Allergens';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import {ArrSETS, ArrSushi, ArrHOT_ROLLS, ArrTEMPURA_ROLLS, ArrSUSHI_BURGER, ArrDRINKS} from '../materials'


function MenuPage() {
  
  
  return (
    <>
      <ModalMenu />
      <Header />
      <FilterMenu />
      <MenuList title={'SETS'} menuList={ArrSETS} />
      <MenuList title={'SUSHI'} menuList={ArrSushi} />
      <MenuList title={'HOT-ROLLS'} menuList={ArrHOT_ROLLS} />
      <MenuList title={'TEMPURA'} menuList={ArrTEMPURA_ROLLS} />
      <MenuList title={'SUSHI-BURGER'} menuList={ArrSUSHI_BURGER} />
      <MenuList title={'DRINKS'} menuList={ArrDRINKS} />
      <Allergens id={'ALLERGEN'} />
      <Footer />
    </>
  );
}

export default MenuPage;