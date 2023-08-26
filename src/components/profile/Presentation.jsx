import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileTitle from "./title&Avatar/ProfileTitle";

const Presentation = () => {
  return (
    <div className="flex flex-col min-h-screen justify-around presentation">
      <div className="flex justify-around items-center align-middle px-44">
        <ProfileTitle />
        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Presentation;
