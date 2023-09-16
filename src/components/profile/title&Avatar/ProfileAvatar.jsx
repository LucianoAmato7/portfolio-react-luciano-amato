import { profile_data } from "../../../data/profile_data.js";
import ProfileSocialNetworksContainer from "./socialNetworks/ProfileSocialNetworksContainer.jsx"

const ProfileAvatar = () => {
  return (
    <div className="relative inline-block">
      <img
        src="/img/profile.png"
        className="drop-shadow-xl rounded-full hover:drop-shadow-2xl ease-out duration-300"
        alt="Luciano Amato profile"
      />
      <ProfileSocialNetworksContainer networks={profile_data.socialNetworks} />
    </div>
  );
};

export default ProfileAvatar;
