import React from 'react'

const Form = ({onSubmitted}) => {
  return (
    <>
        <form id="reservationForm" onSubmit={onSubmitted}>
            <h3 className="text-center my-3">Realiza tu Reservación</h3>
            <div className="row g-2 mb-3 mx-3">
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="text" className="form-control" name="name" />
                  <label htmlFor="name">Nombre Completo</label>
                </div>
              </div>
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="email" className="form-control" name="email" />
                  <label htmlFor="email">Correo Electronico</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mb-3 mx-3">
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="text" className="form-control" name="phone" />
                  <label htmlFor="phone">Telefono</label>
                </div>
              </div>
              <div className="col-md mx-3">
                <div className="form-floating">
                  <select className="form-select" name="people">
                    <option defaultValue>Seleccione una opcion</option>
                    <option value={1}>Uno</option>
                    <option value={2}>Dos</option>
                    <option value={3}>Tres</option>
                    <option value={4}>Cuatro</option>
                    <option value={5}>Cinco</option>
                    <option value={6}>Mas de seis</option>
                  </select>
                  <label htmlFor="people">Cantidad de personas</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mb-3 mx-3">
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="date" className="form-control" name="date" />
                  <label htmlFor="date">Fecha</label>
                </div>
              </div>
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="time" className="form-control" name="time" />
                  <label htmlFor="time">Hora</label>
                </div>
              </div>
            </div>
            <article className="row my-3">
              <div className="col text-center">
                <button className="btn btn-warning my-button" type="submit">Reservar</button>
              </div>
            </article>
          </form>
    </>
  )
}

export default Form