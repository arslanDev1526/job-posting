import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPageHovered, setIsPageHovered] = useState(false);
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-10 border border-red-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-green-800 italic">
                {" "}
                PixelPulse{" "}
              </h1>
            </div>
            <div className="flex md:hidden items-center">
              <input
                type="checkbox"
                className="peer hidden"
                id="navbar-open"
                checked={isOpen}
                onChange={toggleMenu}
              />
              <label
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                htmlFor="navbar-open"
              >
                {isOpen ? (
                  <RxCross1 className="h-6 w-6" />
                ) : (
                  <RxHamburgerMenu className="h-6 w-6" />
                )}
              </label>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "max-h-screen" : "max-h-0"
          } transition-all duration-700 ease-in-out overflow-hidden md:hidden`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-slate-600 hover:text-green-700 py-2 text-base font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-green-700 py-2 text-base font-bold"
            >
              Jobs
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsCategoriesHovered(true)}
              onMouseLeave={() => setIsCategoriesHovered(false)}
            >
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-slate-600 hover:text-green-700 py-2 text-base font-bold"
                >
                  Categories
                </a>
                <MdOutlineArrowDropDown />
              </div>

              <div
                className={`${
                  isCategoriesHovered ? "block" : "hidden"
                } absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10`}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 3
                </a>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsLocationHovered(true)}
              onMouseLeave={() => setIsLocationHovered(false)}
            >
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-slate-600 hover:text-green-700 py-2 text-base font-bold"
                >
                  Location
                </a>
                <MdOutlineArrowDropDown />
              </div>
              <div
                className={`${
                  isLocationHovered ? "block" : "hidden"
                } absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10`}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Location 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Location 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Location 3
                </a>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsPageHovered(true)}
              onMouseLeave={() => setIsPageHovered(false)}
            >
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-slate-600 hover:text-green-700 py-2 text-base font-bold"
                >
                  Pages
                </a>
                <MdOutlineArrowDropDown />
              </div>
              <div
                className={`${
                  isPageHovered ? "block" : "hidden"
                } absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10`}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 3
                </a>
              </div>
            </div>
            <button className="w-9/12 mt-12 bg-green-700 text-white px-4 py-2 rounded-md text-base font-medium mx-auto block">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
