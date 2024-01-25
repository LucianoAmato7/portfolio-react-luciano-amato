import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileTitle from "./title&Avatar/ProfileTitle";
import Aside from "../aside/Aside";
import { CiLocationOn } from "react-icons/ci";

const Presentation = () => {
  return (
      <div className="min-h-screen w-full flex flex-col justify-between items-center align-middle md:w-3/4 self-center pb-20 xl:pt-48 pt-10">
        <Aside />
        <ProfileTitle />
        <ProfileAvatar />
        <div className="flex flex-row text-base text-slate-500 justify-center items-center">
          <CiLocationOn />
          <span className="ml-1">Buenos Aires, Argentina.</span>
        </div>
      </div>
  );
};

export default Presentation;
