import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileSocialNetworksContainer from "./socialNetworks/ProfileSocialNetworksContainer";
import ProfileTitle from "./title&Avatar/ProfileTitle";
import { profile_data } from "../../data/profile_data.js";

const Presentation = () => {
  return (
    <div className="flex flex-col min-h-screen justify-around presentation">
      <div className="flex justify-around items-center align-middle px-44">
        <ProfileTitle />
        <ProfileAvatar />
      </div>
      
      <div className="w-2/3 self-center">
        <ProfileSocialNetworksContainer networks={profile_data.socialNetworks} />
      </div>
    </div>
  );
};

export default Presentation;
