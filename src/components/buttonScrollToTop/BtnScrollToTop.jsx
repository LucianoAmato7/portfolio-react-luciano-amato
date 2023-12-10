import { FaArrowCircleUp } from "react-icons/fa";

const BtnScrollToTop = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-5">
      <button
        onClick={(e) => {
          scrollToTop(e);
        }}
      >
        <FaArrowCircleUp className="text-4xl drop-shadow-md hover:drop-shadow-xl animate-bounce text-slate-400 hover:text-slate-300 ease-in duration-100"/>
      </button>
    </div>
  );
};

export default BtnScrollToTop;
