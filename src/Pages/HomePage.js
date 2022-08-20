import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Header title="Welcome to Li Fong Food" />
      <main className="row">
        <article className="col home-article"></article>
      </main>
      <section className="row menu-home my-5">
          <div className="card col-4" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/detail-food/1" className="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
          <div className="card col-4" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/detail-food/2" className="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
          <div className="card col-4" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/detail-food/3" className="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
      </section>
      <section className="row">
        <article className="col-6 right-article">

        </article>
        <article className="col-6 left-article">

        </article>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
