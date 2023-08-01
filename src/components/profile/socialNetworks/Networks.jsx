import { Link } from "react-router-dom";

const Networks = ({ name, url, img }) => {
  return (
    <Link to={url} target="_blank">
      <img src={img} alt={name} className="w-11"/>
    </Link>
  );
};

export default Networks;
