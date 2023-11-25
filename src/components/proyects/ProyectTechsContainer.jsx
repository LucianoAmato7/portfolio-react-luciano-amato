const ProyectTechsContainer = ({ techs }) => {
  return (
    <div className="
      flex 
      flex-row 
      flex-wrap 
      justify-around 
      place-items-center
      left-0
      bottom-0
      right-0
      
      xl:h-72

      md:px-5
      md:h-32
      md:absolute"
      >
      {techs.map((t, index) => (
        <img
          key={index}
          src={t.image}
          alt={t.name}
          className="w-6 sm:w-14 md:w-14 rounded-lg bg-slate-700 md:p-3 bg-opacity-60"
          data-aos="zoom-in"
        />
      ))}
    </div>
  );
};

export default ProyectTechsContainer;
