import ProfileSocialNetworks from "./socialNetworks/ProfileSocialNetworks.jsx";

const ProfileAvatar = () => {
  return (
    <div
      className="relative rounded-full md:w-3/12 w-10/12 avatar"
      // data-aos="zoom-in"
    >
      {/* <div className="absolute -left-20 -top-20 w-full h-full bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-60" /> */}
      {/* <div className="absolute -right-20 -bottom-20 w-full h-full bg-purple-950 rounded-full mix-blend-multiply filter blur-xl opacity-60" /> */}
      <img
        src="/img/profile.png"
        className="drop-shadow-2xl rounded-full"
        alt="Luciano Amato profile"
      />
      <ProfileSocialNetworks/>
    </div>
  );
};

export default ProfileAvatar;
