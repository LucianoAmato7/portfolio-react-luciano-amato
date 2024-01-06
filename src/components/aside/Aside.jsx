import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";

const Aside = () => {
  return (
    <div
      className="md:absolute md:left-0 md:top-96 md:transform md:-translate-y-1/2 w-full md:w-fit"
      data-aos="fade-right"
    >
      <ul className="flex flex-row md:flex-col justify-around md:justify-center text-slate-300 text-lg md:text-3xl md:ml-14 md:gap-y-14">
        <li className="border rounded-xl p-2 hover:text-white hover:scale-125 ease-out duration-300 shadow-lg shadow-black hover:shadow-slate-500 bg-slate-500 bg-opacity-30">
          <Link
            to="https://api.whatsapp.com/send?phone=5491138752819"
            target="_blank"
            title="whatsapp"
          >
            <AiOutlineWhatsApp />
          </Link>
        </li>
        <li className="border rounded-xl p-2 hover:text-white hover:scale-125 ease-out duration-300 shadow-lg shadow-black hover:shadow-slate-500 bg-slate-500 bg-opacity-30">
          <Link to="mailto:luciano2697@outlook.com.ar" title="E-mail">
            <AiOutlineMail />
          </Link>
        </li>
        <li className="border rounded-xl p-2 hover:text-white hover:scale-125 ease-out duration-300 shadow-lg shadow-black hover:shadow-slate-500 bg-slate-500 bg-opacity-30">
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

export default Aside;
