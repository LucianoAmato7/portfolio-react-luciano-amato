const ProyectTechsContainer = ({ techs }) => {
  return (
      <div className="
        flex 
        flex-row 
        flex-wrap 
        justify-around 
        place-items-center"
        >
          {techs.map((t, index) => (
          <img
            key={index}
            src={t.image}
            alt={t.name}
            className="w-6 md:w-8 my-1 md:my-2"
          />
        ))}
      </div>
  );
};

export default ProyectTechsContainer;
