import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { NavLink } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/FirebaseConnection";

import homeImage from '../img/home-article.png';

const HomePage = () => {
  
  const [commonDishes, setCommonDishes] = useState([]);
  
  const REF_COLLECTION = collection(db, "popular-dishes");
  
  const listenCommonDishes = () => {
    onSnapshot(REF_COLLECTION, (snapshot) => {
      const dishes = [];
      snapshot.docs.forEach((dish) => {
        dishes.push({
          ...dish.data(),
          id: dish?.id,
        });
      });
      setCommonDishes(dishes);
      console.log(dishes);
    });
  };

  useEffect(() => {
    listenCommonDishes();
    
  }, []);

  return (
    <>
      <Header title="Welcome to Li Fong Food" />
      <main className="row align-items-center mt-2">
        <div className="col-4 home-article">
          <img src={homeImage} alt="Li Fong Food Family" />
        </div>
        <div className="col-8 px-5">
          <p className="fst-italic">Los platillos provienen de nuestra familia, provienen desde nuestras raíces. Nuestros platillos contienen nuestra cultura, nuestra historia y con ella cultivamos lazos fuertes con tu familia.</p>
        </div>
      </main>
      <section className="row menu-home mb-5">
        <h3 className="text-center mb-4">Platos Favoritos</h3>
        {commonDishes.map((dish, key) => {
          return (
            <div
              className="card col-4"
              style={{ width: "18rem" }}
              key={key}
            >
              <img src={dish.img} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <p className="card-text">{dish.description}</p>
                <NavLink to="/detail-food/1" className="btn btn-primary">
                  Detalles...
                </NavLink>
              </div>
            </div>
          );
        })}
      </section>
      <section className="row">
        <article className="col-6 right-article"></article>
        <article className="col-6 left-article"></article>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
