import { profile_data } from "../../data/profile_data.js";
import { Link } from "react-router-dom";

const Technologies = () => {
  return (
    <div className="mt-20">
      <h3 className="italic text-3xl underline">Aptitudes:</h3>
      <div className="flex flex-wrap justify-around mt-12 items-center pt-9 border-y border-gray-400">
        {profile_data.technologies.map((techs, index) => (
          <Link key={index} to={`${techs.web}`} target="_blank">
              <img className="w-24 mr-20 mb-6 h-auto hover:scale-125 ease-out duration-300" src={techs.image} alt={techs.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
