import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import ImprimeMenu from '../Components/ImprimeMenu'

import SolicitaMenu from '../firebase/SolicitaMenu';

const MenuPage = () => {

  const [appetizer, setAppetizer] = useState([]);
  const [individualDishes, setIndividualDishes] = useState([]);
  const [secondDishes, setSecondDishes] = useState([]);
  const [comboBanquets, setComboBanquets] = useState([]);
  const [menuDrinks, setMenuDrinks] = useState([]);
  
  const listenAppetizer = () => {
    SolicitaMenu(setAppetizer, 'appetizers');
  };

  const listenIndividualDishes = () => {
    SolicitaMenu(setIndividualDishes, 'individual-dishes');
  };

  const listenSecondaryDishes = () => {
    SolicitaMenu(setSecondDishes, 'second-dishes');
  };

  const listenBanquets = () => {
    SolicitaMenu(setComboBanquets, 'banquets');
  };

  const listenMenuDrinks = () => {
    SolicitaMenu(setMenuDrinks, 'drinks');
  };

  useEffect(() => {
    listenAppetizer();
  }, []);

  useEffect(() => {
    listenIndividualDishes();
  }, []);

  useEffect(() => {
    listenSecondaryDishes();
  }, []);

  useEffect(() => {
    listenBanquets();
  }, []);

  useEffect(() => {
    listenMenuDrinks();
  }, []);

  return (
    <>
        <Header title="Disfruta de Menu de la Casa" />
        <main className='container my-3'>
            <h3 className="text-center mb-4">Entradas</h3>
            <article className='row menu'>
              <ImprimeMenu appetizer={appetizer}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Platillos Principales</h3>
            <article className='row menu'>
              <ImprimeMenu appetizer={individualDishes}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Arroces y Chow Mein</h3>
            <article className='row menu'>
              <ImprimeMenu appetizer={secondDishes}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Banquetes</h3>
            <article className='row menu'>
              <ImprimeMenu appetizer={comboBanquets}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Bebidas</h3>
            <article className='row menu'>
              <ImprimeMenu appetizer={menuDrinks}/>
            </article>
        </main>
    </>
  )
}

export default MenuPage