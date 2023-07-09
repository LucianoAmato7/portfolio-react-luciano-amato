import TechItem from "./TechItem";
import { technologies } from "../../data/technologies_data.js" 

const Technologies = () => {

  return (
    <div className="m-auto text-center h-50">
      {technologies.map((techs) => (
        <TechItem key={techs.name} {...techs}/>
      ))}
    </div>
  );
};

export default Technologies;
