import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileTitle from "./title&Avatar/ProfileTitle";

const Presentation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-around w-5/6 backGroundIMG">
      <div className="flex justify-around items-center align-middle">
        <ProfileTitle />
        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Presentation;
