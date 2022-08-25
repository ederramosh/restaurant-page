import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import ImprimeMenu from '../Components/ImprimeMenu'

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/FirebaseConnection";

const MenuPage = () => {

  const [appetizer, setAppetizer] = useState([]);
  const [individualDishes, setIndividualDishes] = useState([]);
  
  const listenAppetizer = () => {
    onSnapshot(collection(db, "appetizers"), (snapshot) => {
      const entradas = [];
      snapshot.docs.forEach((appetizer) => {
        entradas.push({
          ...appetizer.data(),
          id: appetizer?.id,
        });
      });
      setAppetizer(entradas);
      console.log(entradas);
    });
  };

  const listenIndividualDishes = () => {
    onSnapshot(collection(db, "individual-dishes"), (snapshot) => {
      const individual = [];
      snapshot.docs.forEach((platoPrincipal) => {
        individual.push({
          ...platoPrincipal.data(),
          id: platoPrincipal?.id,
        });
      });
      setIndividualDishes(individual);
      console.log(individual);
    });
  };

  useEffect(() => {
    listenAppetizer();
  }, []);

  useEffect(() => {
    listenIndividualDishes();
  }, []);

  return (
    <>
        <Header title="Disfruta de Menu de la Casa" />
        <main className='row my-3'>
            <h3 className="text-center mb-4">Entradas</h3>
            <article className='row menu'>
              <ImprimeMenu appetizer={appetizer}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Platillos Principales</h3>
            <article className='row menu'>
              <ImprimeMenu appetizer={individualDishes}/>
            </article>
        </main>
    </>
  )
}

export default MenuPage