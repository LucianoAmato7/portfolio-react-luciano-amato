import { Link } from "react-router-dom";
import ProyectTechsContainer from "./ProyectTechsContainer";

const ProyectsCarts = ({
  name,
  imagePC,
  imageMobile,
  url,
  techs,
  description,
}) => {
  return (
    <Link
      className="md:w-1/2 w-auto"
      to={`${url}`}
      target="_blank"
      data-aos="zoom-in"
    >
      <div className="relative rounded-lg bg-slate-700 flex flex-col justify-between ease-in duration-200 p-3 m-3 md:m-5 shadow-lg hover:shadow-md hover:shadow-slate-600">
        <h2 className="text-center text-base md:text-lg font-bold mb-3 italic text-slate-50 tracking-widest underline">
          {name}
        </h2>
        <img
          src={imagePC}
          alt={name}
          className="rounded-lg ease-in duration-200"
        />
        <p className="text-slate-100 pt-3 text-sm my-2 border-b-2 pb-2 w-full text-center">
          {description}
        </p>
        <ProyectTechsContainer techs={techs} />
      </div>
    </Link>
  );
};

export default ProyectsCarts;
