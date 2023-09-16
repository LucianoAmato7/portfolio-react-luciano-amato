import { profile_data } from "../../../data/profile_data.js";
import { Link } from "react-router-dom";

const Technologies = () => {
  return (
    <div className="mt-20">
      <h3 className="italic text-3xl w-fit px-2 border-t border-white rounded-t-lg font-medium bg-white">APTITUDES</h3>
      <div className="flex flex-wrap justify-around items-center pt-9 bg-white rounded-b-xl rounded-tr-xl shadow-xl">
        {profile_data.technologies.map((techs, index) => (
          <Link key={index} to={`${techs.web}`} target="_blank">
              <img className="w-24 mx-10 mb-6 h-auto hover:scale-125 ease-out duration-300 mix-blend-darken" src={techs.image} alt={techs.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
