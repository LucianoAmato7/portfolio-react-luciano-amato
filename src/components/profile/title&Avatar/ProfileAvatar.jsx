import { profile_data } from "../../../data/profile_data.js";
import ProfileSocialNetworksContainer from "./socialNetworks/ProfileSocialNetworksContainer.jsx"

const ProfileAvatar = () => {
  return (
    <div className="relative inline-block rounded-full">
      <img
        src="/img/profile.png"
        className="drop-shadow-2xl rounded-full ease-out duration-200"
        alt="Luciano Amato profile"
      />
      <ProfileSocialNetworksContainer networks={profile_data.socialNetworks} />
    </div>
  );
};

export default ProfileAvatar;
