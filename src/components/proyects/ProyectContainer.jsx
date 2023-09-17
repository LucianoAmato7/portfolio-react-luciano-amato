// import ProyectsCarts from "./ProyectsCarts";
// import { proyects_data } from "../../data/proyects_data.js" 

const ProyectContainer = () => {

  return (
    <div className="w-4/6 mb-36 flex flex-col">
      <h3 className="italic text-3xl w-fit px-2 border-t border-slate-50 rounded-t-lg font-medium bg-slate-50 self-end">PROYECTOS</h3>
      <div className="flex flex-wrap justify-around items-center p-8 bg-slate-50 rounded-b-xl rounded-tl-xl shadow-xl">
        <h2 className="text-5xl">TEXTO DE PRUEBA</h2>
      </div>

      {/* {proyects_data.map( proyect => (
        <ProyectsCarts key={proyect.name} {...proyect}/>
      ))} */}
    </div>
  );
};

export default ProyectContainer;