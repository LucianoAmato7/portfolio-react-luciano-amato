import { Link } from "react-router-dom";

const TechItem = ({ name, image, web }) => {
  return (
    <Link to={`${web}`}>
      <div className="border border-black text-center w-80">
        <img className="techImage" src={image} alt={name} />
        <h2>{name.toUpperCase()}</h2>
      </div>
    </Link>
  );
};

export default TechItem;
