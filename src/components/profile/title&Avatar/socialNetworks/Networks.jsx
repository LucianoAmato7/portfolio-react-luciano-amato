import { Link } from "react-router-dom";

const Networks = ({ name, url, img }) => {
  return (
    <Link to={url} target="_blank">
      <img
        src={img}
        alt={name}
        className={
          "w-12 md:w-16 hover:scale-125 ease-out duration-300 drop-shadow-xl rounded-full bg-slate-300 " +
          (name === "GitHub" ? "p-0.5 md:p-1" : " p-1 md:p-2")
        }
      />
    </Link>
  );
};

export default Networks;
