import ProfileSocialNetworks from "./socialNetworks/ProfileSocialNetworks.jsx";

const ProfileAvatar = () => {
  return (
    <div
      className="relative rounded-full w-2/3 xl:w-1/4 lg:w-2/4 md:w-1/3 sm:w-2/5 avatar shadow-xl"
    >
      <img
        src="/img/profile.png"
        className="drop-shadow-2xl rounded-full pr-2 border"
        alt="Luciano Amato profile"
        loading="lazy"
      />
      <ProfileSocialNetworks />
    </div>
  );
};

export default ProfileAvatar;
