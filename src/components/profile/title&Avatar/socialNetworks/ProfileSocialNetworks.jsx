import { Link } from "react-router-dom";

const ProfileSocialNetworks = () => {
  return (
    <div className="flex justify-around items-center absolute bottom-0 left-0 w-full h-16">
      <Link to={"https://www.linkedin.com/in/luciano-nicolas-amato/"} target="_blank">
        <img
          src={"/img/linkedin.png"}
          alt={"LinkedIn"}
          className={
            "w-12 hover:scale-125 ease-out duration-300 drop-shadow-xl rounded-full bg-slate-300 p-1" 
          }
        />
      </Link>
      <Link to={"https://github.com/LucianoAmato7"} target="_blank">
        <img
          src={"/img/github.png"}
          alt={"GitHub"}
          className={
            "w-12 hover:scale-125 ease-out duration-300 drop-shadow-xl rounded-full bg-slate-300 p-1"
          }
        />
      </Link>
    </div>
  );
};

export default ProfileSocialNetworks;