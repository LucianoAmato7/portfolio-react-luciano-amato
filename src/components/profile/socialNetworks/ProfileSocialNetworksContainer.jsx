import Networks from "./Networks";

const ProfileSocialNetworksContainer = ({ networks }) => {
  return (
    <div className="py-3 border-y border-gray-400 flex justify-around items-center">
      {networks.map((net) => (
        <Networks key={net.name} {...net} />
      ))}
    </div>
  );
};

export default ProfileSocialNetworksContainer;
