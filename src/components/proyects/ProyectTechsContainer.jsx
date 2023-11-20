const ProyectTechsContainer = ({ techs }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row place-items-center absolute left-0 right-0 bottom-0 justify-center h-44 xl:h-72 px-5">
      {techs.map((t, index) => (
        <img
          key={index}
          src={t.image}
          alt={t.name}
          className="w-2/4 rounded-lg bg-slate-700 p-3 bg-opacity-60"
          data-aos="zoom-in"
        />
      ))}
    </div>
  );
};

export default ProyectTechsContainer;
