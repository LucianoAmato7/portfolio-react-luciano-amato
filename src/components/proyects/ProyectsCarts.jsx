import { useState } from "react";
import { Link } from "react-router-dom";
import ProyectTechsContainer from "./ProyectTechsContainer";

const ProyectsCarts = ({ name, imagePC, imageMobile, url, techs }) => {
  const [showTechs, setShowTechs] = useState(false);

  return (
    <Link
      className="md:w-1/2 w-auto"
      to={`${url}`}
      target="_blank"
      onMouseEnter={() => setShowTechs(true)}
      onMouseLeave={() => setShowTechs(false)}
      data-aos="zoom-in"
    >
      <div className="relative rounded-lg bg-slate-700 flex flex-col justify-between proyectsCards ease-in duration-100 p-3 m-5">
        <h2 className="text-center text-base md:text-lg font-bold mb-3 italic text-slate-50 tracking-widest underline">
          {name}
        </h2>
        <img
          src={imagePC}
          alt={name}
          className={`rounded-lg ease-in duration-200 ${
            showTechs ? "blur-sm opacity-40" : "blur-none"
          }`}
        />
        {showTechs && <ProyectTechsContainer techs={techs} />}
      </div>
    </Link>
  );
};

export default ProyectsCarts;

//VER COMO Y EN DONDE PONER LA IMAGEN DE MOBILE
