import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { PiBookOpenTextBold } from "react-icons/pi";
import { TbUserHexagon } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className=" bg-white h-full border-solid ">
      <div className=" flex justify-center items-center my-8  mb-12">
        <div className=" flex items-center justify-center w-10 h-10  rounded-lg bg-blue-600 mx-4 ">
          <FaBookOpen style={{ color: "white" }} size={30} />
        </div>
        <div>
          <p className=" text-3xl">Nuegas</p>
        </div>
      </div>
      <div className=" flex flex-col ">
        <div className=" flex flex-col gap-6  ">
          <div className=" flex items-center  gap-2 mx-10 rounded-lg  hover:bg-slate-100   ">
            <TbCategory2 style={{ color: "" }} size={30} className=" ml-5" />
            <p className="">Overview</p>
          </div>
          <div className=" flex items-center  gap-2 mx-10 rounded-lg  hover:bg-slate-100  ">
            <PiBookOpenTextBold
              style={{ color: "" }}
              size={30}
              className=" ml-5"
            />
            <p className="">Task</p>
          </div>
          <div className=" flex items-center  gap-2 mx-10 rounded-lg  hover:bg-slate-100  ">
            <TbUserHexagon style={{ color: "" }} size={30} className=" ml-5" />
            <p className="">Mentors</p>
          </div>
          <div className=" flex items-center  gap-2 mx-10 rounded-lg  hover:bg-slate-100  ">
            <BiMessageSquareDots
              style={{ color: "" }}
              size={30}
              className=" ml-5"
            />
            <p className="">Messages</p>
          </div>
          <div className=" flex items-center  gap-2 mx-10 rounded-lg  hover:bg-slate-100  ">
            <RiSettings4Line
              style={{ color: "" }}
              size={30}
              className=" ml-5"
            />
            <p className="">Settings</p>
          </div>
        </div>
        <div className=" flex flex-col items-center mt-32 static">
          <div className=" rounded-full border-2    bg-white p-1 absolute origin  bottom-56 object-left-top  shadow-lg shadow-white/25 ">
            <BsFillQuestionCircleFill size={40} />
          </div>
          <div className=" bg-slate-900 mx-5 rounded-lg flex flex-col   gap-3 ">
            <div className=" my-5">
              <h1 className=" text-white flex justify-center mt-6 ">
                Help Center
              </h1>
              <p className="text-white flex justify-center text-center text-sm">
                Having Trouble in Learning. Please contact us for more
                questions.
              </p>
            </div>

            <div className=" bg-white gap-3 mx-4 rounded-lg my-4 py-2">
              <p className="flex justify-center">Go To Help Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
