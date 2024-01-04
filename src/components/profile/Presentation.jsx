import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileTitle from "./title&Avatar/ProfileTitle";
import NavBar2 from "../navBar/NavBar2";
import { CiLocationOn } from "react-icons/ci";

const Presentation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between w-full pb-16 pt-8">
      <NavBar2/>
      <div className="flex flex-col md:flex-row justify-between md:justify-around items-center align-middle w-11/12 md:w-5/6 self-center">
        <ProfileTitle />
        <ProfileAvatar />
      </div>
      <div className="border-slate-200 w-full md:w-1/2 md:self-end md:border-b flex flex-row text-slate-300 justify-center md:pr-16">
        <CiLocationOn className="text-xl mb-3"/> 
        <span className="ml-1">Buenos Aires, Argentina.</span>
      </div>
    </div>
  );
};

export default Presentation;
