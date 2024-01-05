import ProfileSocialNetworks from "./socialNetworks/ProfileSocialNetworks.jsx";

const ProfileAvatar = () => {
  return (
    <div
      className="relative rounded-full md:w-1/5 w-4/5 avatar shadow-xl"
      data-aos="zoom-in"
    >
      <img
        src="/img/profile.png"
        className="drop-shadow-2xl rounded-full pr-1"
        alt="Luciano Amato profile"
      />
      <ProfileSocialNetworks/>
    </div>
  );
};

export default ProfileAvatar;
