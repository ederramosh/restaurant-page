import React from "react";
import { NavLink } from "react-router-dom";

const ImprimeMenu = ({appetizer}) => {

  return (
    <>
      {appetizer.map((menu, key) => {
        return (
          <div className="card col-4 my-3" style={{ width: "18rem" }} key={key}>
            <img src={menu.img} className="card-img-top mt-3" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">{menu.name}</h5>
              <NavLink
                to={`/detail-food/${menu.id}`}
                className="btn btn-primary my-3"
              >
                Descripción
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImprimeMenu;
