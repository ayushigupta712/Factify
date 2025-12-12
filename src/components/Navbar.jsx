import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handlePublisherClick = () => {
    closeMenu();
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("Publisher clicked, userData:", userData);
    if (userData && userData.publisher === true) {
      console.log("Navigating to publisher dashboard");
      navigate("/publisher");
    } else {
      console.log(
        "User is not a publisher; navigating to publisher registration"
      );
      navigate("/pubreg");
    }
  };

  const handleReporterClick = () => {
    closeMenu();
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("Reporter clicked, userData:", userData);
    if (userData && userData.reporter === true) {
      console.log("Navigating to reporter dashboard");
      navigate("/reporter");
    } else {
      console.log(
        "User is not a reporter; navigating to reporter registration"
      );
      navigate("/repreg");
    }
  };

  return (
    <>
      <div className="border-b-3 z-10 fixed bg-[#121727] border-b-[#243549] py-3 flex items-center text-white w-full justify-between">
        <div className="mx-10 font-bold cursor-pointer text-2xl">
          <Link to={"/home"}>FACTIFY</Link>
        </div>

        <div className="flex border border-gray-600 w-150 rounded-md">
          <input
            type="search"
            name="search"
            placeholder="Find anything..."
            className="w-full border-none bg-transparent px-4 py-1 rounded-md font-medium text-gray-300 outline-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#243549] rounded-r-md px-4 py-2 text-white"
          >
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center mr-44 relative">
          <button
            className="rounded-md mx-7 bg-[#243549] p-2 cursor-pointer px-5"
            onClick={toggleMenu}
          >
            Switch Account
          </button>

          {/* Flyout Menu */}
          {menuOpen && (
            <div className="absolute z-10 right-52 top-12 bg-[#243549] text-white rounded-md shadow-md w-40">
              <ul className="py-2">
                <li
                  onClick={handlePublisherClick}
                  className="px-4 py-2 hover:bg-[#1a2a3a] cursor-pointer"
                >
                  Publisher
                </li>
                <li
                  onClick={handleReporterClick}
                  className="px-4 py-2 hover:bg-[#1a2a3a] cursor-pointer"
                >
                  Reporter
                </li>
              </ul>
            </div>
          )}

          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-[#66e7fd]">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#66e7fd]">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="cursor-pointer hover:text-[#66e7fd]">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-[#121727] z-9 w-full fixed mt-16.5 border-b-3 border-[#243549] py-3 flex text-white">
        <ul className="flex gap-10">
          <li></li>
          <li className="cursor-pointer hover:text-[#66e7fd]">For You</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">Technical</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">Education</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">AI</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">DevOps</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">For You</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">Technical</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">Education</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">AI</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">DevOps</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">For You</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">Technical</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">Education</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">AI</li>
          <li className="cursor-pointer hover:text-[#66e7fd]">DevOps</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
