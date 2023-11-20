import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileTitle from "./title&Avatar/ProfileTitle";

const Presentation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-around w-11/12 md:w-5/6">
      <div className="flex flex-col md:flex-row justify-between md:justify-around items-center align-middle">
        <ProfileTitle />
        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Presentation;
