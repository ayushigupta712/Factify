import React from "react";
import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { MdFileCopy } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import { MdFolderCopy } from "react-icons/md";
import { ImParagraphRight } from "react-icons/im";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  return (
    <>
      {/* <div class="fixed mt-29 justify-between border-5  h-full w-64 flex-1 border-r-3 border-r-[#243549] flex-col bg-[#121727] pl-3 font-semibold text-[#B0B0B0]">
        <div class="mt-3 flex border items-center">
          <div class="h-10 w-10 rounded-4xl border bg-[#243549]"></div>
          <div class="flex p-2 pl-5 font-bold">userData.fullName</div>
        </div>
        <div class="justify-center flex border flex-col">
          <div class="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <AiFillHome />
            Home
          </div>
          <div class="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <IoPeople />
            About Us
          </div>
          <div class="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <IoCalendarSharp />
            Contact Us
          </div>
          <div class="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <MdFolderCopy />
            Reporter 
          </div>
          <div class="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <MdFileCopy />
            Publisher 
          </div>
          
        </div>

        <div class="border flex flex-col">
          <div class="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <IoSettingsSharp />
            Settings
          </div>
          <Link to={"/"}>
            <div class="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 text-red-400 hover:bg-[#243549]">
              <TbLogout />
              Log out
            </div>
          </Link>
        </div>  
      </div> */}

      <div className="fixed h-full w-64 flex flex-col border-r-4 border-r-[#243549] bg-[#121727] pl-3 font-semibold text-[#B0B0B0]">
        {/* Top Section */}
        <div className="mt-35 ml-3 flex items-center gap-2">
          <div className="h-10 w-10 rounded-full border bg-[#243549]"></div>
          <div className="font-bold">userData.fullName</div>
        </div>

        {/* Middle Section - right below top section */}
        <div className="mt-6 flex flex-col">
          <Link to={"/home"}>
            <div className="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
              <AiFillHome />
              Home
            </div>
          </Link>
          <Link to={"/about"}>
            <div className="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
              <IoPeople />
              About Us
            </div>
          </Link>
          <Link to={"/contact"}>
          <div className="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <IoCalendarSharp />
            Contact Us
          </div>
          </Link>
          <Link to={"/reporter"}>
          <div className="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <MdFolderCopy />
            Reporter
          </div>
          </Link>
          <Link to={"/publisher"}>
          <div className="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <MdFileCopy />
            Publisher
          </div>
          </Link>
        </div>

        {/* Spacer to push the last section to bottom */}
        <div className="flex-grow" />

        {/* Bottom Section */}
        <div className="flex flex-col mb-5">
          <div className="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 hover:bg-[#243549] hover:text-white">
            <IoSettingsSharp />
            Settings
          </div>
          <Link to={"/"}>
            <div className="mr-10 flex cursor-pointer items-center gap-2 rounded-md p-3 pl-5 text-red-400 hover:bg-[#243549]">
              <TbLogout />
              Log out
            </div>
          </Link>
        </div>
      </div>


    </>
  );
};

export default Sidebar;
