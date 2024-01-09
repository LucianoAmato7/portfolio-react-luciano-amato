import { MdArrowUpward } from "react-icons/md";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mb-12s w-full h-20 md:h-24 bg-slate-900 flex flex-col justify-around items-center text-gray-500">
      <button
        onClick={(e) => {
          scrollToTop(e);
        }}
      >
        <MdArrowUpward className="text-3xl drop-shadow-md hover:drop-shadow-xl hover:text-slate-300 ease-in duration-100" />
      </button>
      <p className="text-xs md:text-sm">
        © Luciano Nicolás Amato. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
