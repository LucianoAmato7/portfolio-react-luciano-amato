import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const RatingStars = () => {
  const [rated, setRated] = useState(false);
  const [rating, setRating] = useState(0);

  const HandleButton = (e) => {
    e.preventDefault();
    const message = document.getElementById("ratingMessage").value;
    const RatingToSend = { value: rating, message: message };
    setRated(true);
    console.log(RatingToSend);
    //ARCHIVAR CALIFICACION
  };

  const stars = {
    size: 60,
    count: 5,
    value: 1,
    a11y: true,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };

  return (
    <>
      {rated === true ? (
        <h2>Gracias por calificar!</h2>
      ) : (
        <div className="rounded-lg shadow-2xl text-center pt-1 my-8 mx-96">
          <h1 className="text-3xl font-bold my-6">
            Tu opinión me ayuda mucho!
          </h1>
          <div className="bg-slate-100 flex flex-col py-6 items-center">
            <h3 className="text-xl mb-2">Como puntuarías este Portfolio?</h3>
            <ReactStars {...stars} />
            <input
              className="rounded-lg m-6 p-2 h-20 w-3/4"
              id="ratingMessage"
              type="text"
              placeholder="Deja un comentario, si quieres"
            />

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
//CENTRAR DIV