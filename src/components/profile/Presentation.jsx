import ProfileAvatar from "./title&Avatar/ProfileAvatar";
import ProfileTitle from "./title&Avatar/ProfileTitle";

const Presentation = () => {
  return (
    <div className="flex flex-col justify-around w-5/6 my-52">
      <div className="flex justify-around items-center align-middle">
        <ProfileTitle />
        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Presentation;
