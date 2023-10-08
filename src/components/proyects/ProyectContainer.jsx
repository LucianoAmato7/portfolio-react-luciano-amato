// import ProyectsCarts from "./ProyectsCarts";
// import { proyects_data } from "../../data/proyects_data.js" 

const ProyectContainer = () => {

  return (
    <div className="w-4/6 mb-36 flex flex-col">
      <h3 className="italic text-3xl w-fit px-2 border-t border-slate-800 rounded-t-lg font-medium bg-slate-800 self-end text-white tracking-widest">PROYECTOS</h3>
      <div className="flex flex-wrap justify-around items-center bg-slate-800 rounded-b-xl rounded-tl-xl shadow-xl proyectsContainer">
        <h2 className="text-5xl my-96">TEXTO DE PRUEBA</h2>
        {/* {proyects_data.map( proyect => (
          <ProyectsCarts key={proyect.name} {...proyect}/>
        ))} */}
      </div>
    </div>
  );
};

export default ProyectContainer;