import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileSocialNetworksContainer from "./socialNetworks/ProfileSocialNetworksContainer";
import ProfileTitle from "./title&Avatar/ProfileTitle";
import { socialNetworks } from "../../data/socialNetworks_data.js";

const Presentation = () => {
  return (
    <div className="flex flex-col min-h-screen justify-around">
      <div className="flex justify-around items-center align-middle px-32">
        <ProfileTitle />
        <ProfileAvatar />
      </div>

      <div className="w-3/4 self-center">
        <ProfileSocialNetworksContainer networks={socialNetworks} />
      </div>
    </div>
  );
};

export default Presentation;
