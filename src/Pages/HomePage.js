import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { NavLink } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/FirebaseConnection";

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
      <main className="row">
        <article className="col home-article"></article>
      </main>
      <section className="row menu-home my-5">
        <h3 className="text-center mb-4">Platos Favoritos</h3>
        {commonDishes.map((dish, key) => {
          return (
            <div
              className="card col-4"
              style={{ width: "18rem" }}
              key={key}
            >
              <img src={dish.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <p className="card-text">{dish.description}</p>
                <NavLink to="/detail-food/1" className="btn btn-primary">
                  Go somewhere
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
