const ProfileTitle = () => {
  return (
    <div className="z-10 relative pb-6 text-slate-200 italic mb-10 md:mb-0">
      <h2
        className="text-2xl md:text-5xl drop-shadow-2xl font-semibold md:mb-20 md:ml-5 text-slate-200 text-center hidden md:block"
        data-aos="zoom-in-right"
      >
        ¡Bienvenido! soy
      </h2>
      <h1
        className="md:text-6xl text-4xl drop-shadow-2xl text-center font-semibold"
        data-aos="fade-right"
      >
        Luciano Nicolás Amato
      </h1>
      <h2
        className="text-3xl md:text-5xl drop-shadowxl text-center font-bold mt-5 border-t-2 border-slate-100 pt-6"
        data-aos="fade-left"
      >
        Desarrollador Web Full Stack
      </h2>
    </div>
  );
};

export default ProfileTitle;
