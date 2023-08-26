import Networks from "./Networks";

const ProfileSocialNetworksContainer = ({ networks }) => {
  return (
    <div className="flex justify-around items-center absolute bottom-0 left-0 w-full h-16">
      {networks.map((net) => (
        <Networks key={net.name} {...net} />
      ))}
    </div>
  );
};

export default ProfileSocialNetworksContainer;
