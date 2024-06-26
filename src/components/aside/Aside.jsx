import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";

const Aside = () => {
  return (
    <div
      className="xl:absolute xl:left-0 xl:top-96 w-full xl:w-fit xl:mb-0 mb-14 h-full"
    >
      <ul className="flex flex-row xl:flex-col justify-around xl:justify-center text-slate-300 text-lg md:text-3xl xl:ml-14 xl:gap-y-14">
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
            to="/pdf/CV - Luciano Nicolas Amato - EN.pdf"
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
