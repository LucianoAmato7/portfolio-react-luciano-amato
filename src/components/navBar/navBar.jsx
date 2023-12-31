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
      className="z-20 opacity-95 fixed top-0 w-full bg-slate-800 shadow-md flex md:justify-end"
      data-aos="fade-down"
    >
      <ul className="md:w-1/5 w-full flex flex-row justify-between items-center text-slate-200 text-xl md:mr-20 my-2 mx-10">
        <li>
          <Link
            to="https://api.whatsapp.com/send?phone=5491138752819"
            target="_blank"
            title="whatsapp"
          >
            <AiOutlineWhatsApp />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/luciano-nicolas-amato/"
            target="_blank"
            title="LinkedIn"
          >
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/LucianoAmato7/"
            target="_blank"
            title="GitHub"
          >
            <AiFillGithub />
          </Link>
        </li>
        <li>
          <Link to="mailto:luciano2697@outlook.com.ar" title="E-mail">
            <AiOutlineMail />
          </Link>
        </li>
        <li>
          <Link
            to="/pdf/CurriculumVitae-LucianoAmato.pdf"
            target="_blank"
            title="CV"
          >
            <BsFiletypePdf />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
