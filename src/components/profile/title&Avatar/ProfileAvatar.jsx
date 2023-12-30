import { profile_data } from "../../../data/profile_data.js";
import ProfileSocialNetworksContainer from "./socialNetworks/ProfileSocialNetworksContainer.jsx";

const ProfileAvatar = () => {
  return (
    <div
      className="relative rounded-full md:w-3/12 w-10/12 avatar"
      data-aos="zoom-in"
    >
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <img
        src="/img/profile.png"
        className="drop-shadow-2xl rounded-full"
        alt="Luciano Amato profile"
      />
      <ProfileSocialNetworksContainer networks={profile_data.socialNetworks} />
    </div>
  );
};

export default ProfileAvatar;
