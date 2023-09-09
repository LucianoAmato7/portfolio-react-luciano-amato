import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Rated from "./Rated";

const RatingStars = () => {
  const [rated, setRated] = useState(false);
  const [rating, setRating] = useState(0);

  const HandleButton = (e) => {
    e.preventDefault();
    const message = document.getElementById("ratingMessage").value;
    const RatingToSend = { value: rating, message: message };
    setRated(true);
    // ARCHIVAR CALIFICACIÓN
    // QUE SEA VIA MAIL Y A UNA DB COMO FIREBASE
  };

  const stars = {
    size: 60,
    count: 5,
    value: 0,
    a11y: true,
    onChange: (newValue) => {
      setRating(newValue);
    }
  };

  return (
    <>
      {rated === true ? (
        <Rated/>
      ) : (
        <div className="rounded-lg shadow-2xl text-center pt-1 my-8 w-1/3">
          <h1 className="text-3xl font-semibold my-6">
            Tu opinión me ayuda mucho!
          </h1>
          <div className="bg-slate-100 flex flex-col py-6 items-center">
            <h3 className="text-xl mb-2">Como puntuarías este Portfolio?</h3>
            <ReactStars {...stars} />
            <textarea 
              className="rounded-lg m-6 p-2 h-20 w-3/4 resize-y"
              id="ratingMessage"
              placeholder="Deja un comentario, si quieres"
            ></textarea >

            <button
              className="rounded-lg bg-indigo-500 text-white max-w-fit px-4 py-2 text-xl"
              onClick={(event) => {
                HandleButton(event);
              }}
            >
              Calificar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RatingStars;

//https://www.npmjs.com/package/react-rating-stars-component
//MEJORAR ESTRELLITAS VER DOCUMENTACION
//MEJORAR MENSAJE DE GRACIAS POR CALIFICAR
// QUE SEA REQUERIDO EL APLICAR UN VALOR ANTES DE CALIFICAR