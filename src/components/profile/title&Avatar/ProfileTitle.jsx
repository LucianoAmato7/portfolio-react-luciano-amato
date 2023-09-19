const ProfileTitle = () => {
  return (
    <div className="z-10 relative firstName pb-6">
      <h1 className="italic text-7xl drop-shadow-2xl text-center font-semibold ease-out duration-200">
        Luciano Nicolás
        <br />
        <span className="text-8xl">Amato</span>
      </h1>
      <h2 className="italic text-5xl drop-shadow2xl text-center font-semibold ease-out duration-200 mt-10 border-t-4 border-black pt-6">
        Desarrollador Web Full Stack
      </h2>
      <span className="tracking-wide antialiased text-7xl italic text-yellow-400 font-medium flex justify-center mt-2">JAVASCRIPT</span>
    </div>
  );
};

export default ProfileTitle;
