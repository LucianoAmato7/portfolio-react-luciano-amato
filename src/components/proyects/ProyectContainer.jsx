import { profile_data } from "../../data/profile_data.js";
import ProyectsCarts from "./ProyectsCarts.jsx";

const ProyectContainer = () => {
  return (
    <div className="w-5/6 md:w-4/6 mb-20 md:mb-28 flex flex-col">
      <h3 className="italic text-xl md:text-3xl w-fit px-2 border-t border-slate-800 rounded-t-lg font-medium bg-slate-800 self-end text-white tracking-widest">
        PROYECTOS
      </h3>
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center bg-slate-800 rounded-b-xl rounded-tl-xl shadow-2xl">
        {profile_data.proyects.map((proyects, index) => (
          <ProyectsCarts key={index} {...proyects} />
        ))}
      </div>
    </div>
  );
};

export default ProyectContainer;