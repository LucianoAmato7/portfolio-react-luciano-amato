const ProfileTitle = () => {
  return (
    <div className="z-10 relative pb-6 text-white mb-10 md:mb-0 tracking-widest">
      <h2
        className="font-light text-base md:text-xl xl:text-2xl drop-shadow-2xl mb-2 md:mb-4 md:ml-5 text-center"
        data-aos="zoom-in-right"
      >
        ¡Bienvenido! soy
      </h2>
      <h1
        className="text-4xl md:text-4xl xl:text-6xl drop-shadow-2xl text-center font-bold"
        data-aos="fade-right"
      >
        Luciano Nicolás Amato
      </h1>
      <hr className="border-white mx-auto w-1/4 my-4" data-aos="zoom-in" />
      <p
        className="font-medium text-lg md:text-lg xl:text-xl drop-shadowxl text-center"
        data-aos="fade-left"
      >
        Desarrollador Web Full Stack
      </p>
    </div>
  );
};

export default ProfileTitle;
