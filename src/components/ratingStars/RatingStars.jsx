import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Rated from "./Rated";

const RatingStars = () => {
  const [rated, setRated] = useState(false);
  const [rating, setRating] = useState(0);

  const HandleButton = (e) => {
    e.preventDefault();

    if (!rating == 0) {
      const message = document.getElementById("ratingMessage").value;
      const RatingToSend = { value: rating, message: message };
      console.log(RatingToSend);
      setRated(true);
      // ARCHIVAR CALIFICACIÓN
      // QUE SEA VIA MAIL Y A UNA DB COMO FIREBASE
    } else {
      //COLOCAR UNA ALERTA ! EN DONDE SE DE AVISO QUE NO SE ELIGIO UN VALOR (ESTRELLITA)
      console.log("no se ha elegido un valor de estrellitas");
    }
  };

  const stars = {
    size: 60,
    count: 5,
    value: 0,
    a11y: true,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };

  return (
    <>
      {rated === true ? (
        <Rated />
      ) : (
        <div className="rounded-lg shadow-2xl text-center pt-1 mt-6 mb-20 w-1/3 bg-slate-700" data-aos="fade-up">
          <h1 className="text-3xl font-semibold my-6 text-slate-200">
            !Tu opinión me ayuda mucho!
          </h1>
          <div className="bg-slate-800 flex flex-col py-6 items-center rounded-b-lg">
            <h3 className="text-xl mb-2 text-slate-200">¿Como puntuarías este Portfolio?</h3>
            <ReactStars {...stars} />
            <textarea
              className="rounded-lg m-6 p-2 h-20 w-3/4 resize-y bg-slate-300"
              id="ratingMessage"
              placeholder="Deja un comentario, si quieres"
            ></textarea>

            <button
              className="rounded-lg bg-blue-700 hover:bg-blue-500 hover:scale-110 transition text-white max-w-fit px-4 py-2 text-xl"
              onClick={(event) => {
                HandleButton(event);
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RatingStars;

//MEJORAR MENSAJE DE GRACIAS POR CALIFICAR
// QUE SEA REQUERIDO EL APLICAR UN VALOR ANTES DE CALIFICAR
