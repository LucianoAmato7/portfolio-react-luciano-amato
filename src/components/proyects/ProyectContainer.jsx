import ProyectsCarts from "./ProyectsCarts";
import { proyects_data } from "../../data/proyects_data.js" 

const ProyectContainer = () => {

  return (
    <div>
      {proyects_data.map( proyect => (
        <ProyectsCarts key={proyect.name} {...proyect}/>
      ))}
    </div>
  );
};

export default ProyectContainer;