import { profile_data } from "../../../../data/profile_data.js";
import { Link } from "react-router-dom";

const Technologies = () => {
  return (
    <div className="mb-36 w-4/6 pt-10">
      <h3 className="italic text-3xl w-fit px-2 border-t border-slate-800 rounded-t-lg font-medium bg-slate-800 text-slate-100 tracking-widest">
        APTITUDES
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row items-center bg-slate-800 rounded-b-xl rounded-tr-xl shadow-2xl">
        {profile_data.technologies.map((techs, index) => (
          <Link key={index} to={`${techs.web}`} target="_blank">
            <div className="rounded-lg bg-slate-700 flex flex-col justify-between p-8 m-2 techsCards ease-in duration-100">
              <img
                className="w-24 self-center"
                src={techs.image}
                alt={techs.name}
              />
              <p className="text-white text-center text-lg mt-2 tracking-wider">
                {techs.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
