import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";

const NavBar = () => {
  return (
    <div
      className="md:border-b-2 border-slate-400 md:w-1/2"
      data-aos="fade-right"
    >
      <ul className="flex justify-around items-center text-slate-400 text-xl md:mb-2">
        <li>
          <Link
            to="https://api.whatsapp.com/send?phone=5491138752819"
            target="_blank"
            title="whatsapp"
          >
            <AiOutlineWhatsApp className="hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/luciano-nicolas-amato/"
            target="_blank"
            title="LinkedIn"
          >
            <AiFillLinkedin className="hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/LucianoAmato7/"
            target="_blank"
            title="GitHub"
          >
            <AiFillGithub className="hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
        <li>
          <Link to="mailto:luciano2697@outlook.com.ar" title="E-mail">
            <AiOutlineMail className="hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
        <li>
          <Link
            to="/pdf/CurriculumVitae-LucianoAmato.pdf"
            target="_blank"
            title="CV"
          >
            <BsFiletypePdf className="hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
