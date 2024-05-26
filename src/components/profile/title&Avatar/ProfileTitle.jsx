const ProfileTitle = () => {
  return (
    <div className="z-10 relative pb-6 md:pb-8 text-white mb-10 md:mb-0 tracking-widest">
      <div className="-z-10 absolute -left-0 md:-left-20 -top-9 md:-top-14 w-full h-full bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="-z-10 absolute -right-0 md:-right-20 -bottom-9 md:-bottom-14 w-full h-full bg-purple-950 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <h2
        className="font-light text-base md:text-xl xl:text-2xl drop-shadow-2xl mb-2 md:mb-4 md:ml-5 text-center"
      >
        ¡Bienvenido! soy
      </h2>
      <h1
        className="text-3xl md:text-4xl xl:text-6xl drop-shadow-2xl text-center font-bold"
      >
        Luciano Nicolás Amato
      </h1>
      <hr className="border-white mx-auto w-1/4 my-4" />
      <h2
        className="font-medium text-lg md:text-lg xl:text-xl drop-shadowxl text-center"
      >
        Desarrollador Web Full Stack
      </h2>
    </div>
  );
};

export default ProfileTitle;
