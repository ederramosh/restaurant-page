import React, { useEffect, useState } from "react";
import { SolicitaMenu } from "../firebase/firebaseFunctions";

const ListReservation = () => {
  const [reservations, setReservation] = useState([]);

  const listenListReservation = () => {
    SolicitaMenu(setReservation, "reservaciones");
  };

  useEffect(() => {
    listenListReservation();
  }, []);

  return (
    <>
      <h3 className="text-center mt-3">Lista de Reservaciones</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha</th>
            <th scope="col">Personas</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
          </tr>
        </thead>
        <tbody>
          
            {reservations.map((reservation, key) => {
                return(
                    <tr key={key}>
                        <th scope="row">{reservation.name}</th>
                        <td>{reservation.date}</td>
                        <td>{reservation.people}</td>
                        <td>{reservation.date}</td>
                        <td>{reservation.time}</td>
                    </tr>
                )
            })
            }

          
        </tbody>
      </table>
    </>
  );
};

export default ListReservation;
