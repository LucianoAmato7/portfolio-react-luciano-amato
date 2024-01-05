import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";

const Aside = () => {
  return (
    <div
      className="flex md:absolute md:inset-y-0 md:left-0 w-full"
      // data-aos="fade-right"
    >
      <ul className="flex flex-row md:flex-col justify-between md:justify-center text-slate-300 text-xl md:text-3xl md:ml-14 md:gap-y-1">
        <li>
          <Link
            to="https://api.whatsapp.com/send?phone=5491138752819"
            target="_blank"
            title="whatsapp"
          >
            <AiOutlineWhatsApp className="hover:text-white hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
        <li>
          <Link to="mailto:luciano2697@outlook.com.ar" title="E-mail">
            <AiOutlineMail className="hover:text-white hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
        <li>
          <Link
            to="/pdf/CurriculumVitae-LucianoAmato.pdf"
            target="_blank"
            title="CV"
          >
            <BsFiletypePdf className="hover:text-white hover:scale-125 ease-out duration-300 shadow-2xl"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
