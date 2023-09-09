import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full bg-slate-300 shadow-md z-10 flex justify-end pr-20 py-1">
      <ul className="w-1/5 flex flex-row justify-between">
        <li>
          <Link
            to="https://api.whatsapp.com/send?phone=5491138752819"
            target="_blank"
          >
            <AiOutlineWhatsApp className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/luciano-nicolas-amato/"
            target="_blank"
          >
            <AiFillLinkedin className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/LucianoAmato7/" target="_blank">
            <AiFillGithub className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link to="mailto:luciano2697@outlook.com.ar">
            <AiOutlineMail className="text-2xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
