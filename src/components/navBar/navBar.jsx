import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {GrDocumentPdf} from "react-icons/gr";

const NavBar = () => {
  return (
    <div className="z-20 opacity-95 fixed top-0 w-full bg-slate-300 shadow-md flex justify-end pr-20 py-1">
      <ul className="w-1/5 flex flex-row justify-between items-center">
        <li>
          <Link
            to="https://api.whatsapp.com/send?phone=5491138752819"
            target="_blank"
            title="whatsapp"
          >
            <AiOutlineWhatsApp className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/luciano-nicolas-amato/"
            target="_blank"
            title="LinkedIn"
          >
            <AiFillLinkedin className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/LucianoAmato7/" target="_blank" title="GitHub">
            <AiFillGithub className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link to="mailto:luciano2697@outlook.com.ar" title="E-mail">
            <AiOutlineMail className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link to="/pdf/CurriculumVitae-LucianoAmato.pdf" target="_blank" title="CV">
              <GrDocumentPdf className="text-xl"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
