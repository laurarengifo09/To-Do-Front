import { FaBookOpen, FaTasks } from "react-icons/fa";
import { CustomNavLink } from './CustomNavLink';
import { BsRecycle } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={`flex flex-col w-full bg-white h-full border-solid ${className}`}
    >
      <div className="flex justify-center items-center my-8 mb-12">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-custom-primary-500 mx-4">
          <FaBookOpen style={{ color: "white" }} size={30} />
        </div>
        <div>
          <p className="text-3xl font-bold">Nuegas</p>
        </div>
      </div>
      <div className="flex flex-col self-center gap-2">
        <CustomNavLink to="/home" Icon={<FaTasks size={20}/>} label="All tasks" />
        <CustomNavLink to="/create" Icon={<IoCreateOutline size={26} />} label="New Task" />
        <CustomNavLink to="/recycle-bin" Icon={<BsRecycle size={26} />} label="Recycle bin" />
      </div>
    </div>
  );
};
