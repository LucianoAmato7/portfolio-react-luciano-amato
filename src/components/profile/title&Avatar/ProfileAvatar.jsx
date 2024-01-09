import ProfileSocialNetworks from "./socialNetworks/ProfileSocialNetworks.jsx";

const ProfileAvatar = () => {
  return (
    <div
      className="relative rounded-full w-2/3 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-2/5 avatar shadow-xl"
      data-aos="zoom-in"
    >
      <img
        src="/img/profile.png"
        className="drop-shadow-2xl rounded-full pr-2 border"
        alt="Luciano Amato profile"
      />
      <ProfileSocialNetworks />
    </div>
  );
};

export default ProfileAvatar;
