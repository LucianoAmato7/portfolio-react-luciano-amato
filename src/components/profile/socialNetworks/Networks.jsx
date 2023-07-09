import { Link } from "react-router-dom";

const Networks = ({ name, url, img }) => {
  return (
    <Link to={url}>
      <img src={img} alt={name} className="w-14"/>
    </Link>
  );
};

export default Networks;
