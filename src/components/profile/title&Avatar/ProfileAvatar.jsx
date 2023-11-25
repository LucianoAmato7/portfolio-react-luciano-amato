import { profile_data } from "../../../data/profile_data.js";
import ProfileSocialNetworksContainer from "./socialNetworks/ProfileSocialNetworksContainer.jsx"

const ProfileAvatar = () => {
  return (
    <div className="relative rounded-full avatar md:w-3/12 w-10/12" 
      data-aos="zoom-in"
      >
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
