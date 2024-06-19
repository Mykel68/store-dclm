import Image from "next/image";
import Img from "@/assets/Image.png";
import { TbLogout } from "react-icons/tb";

interface UserProfileProps {
  username: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, email }) => {
  return (
    <div className="flex gap-2 p-1 items-center justify-center">
      <Image
        src={Img}
        alt="Admin Image"
        width={40}
        height={40}
        className="rounded-full bg-orange-300"
      />
      <div className="flex flex-col">
        <p className="text-white font-semibold ">{username}</p>
        <p className="text-slate-100 text-xs">{email}</p>
      </div>
      <TbLogout className="ml-6 text-3xl text-white" />
    </div>
  );
};

export default UserProfile;
