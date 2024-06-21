import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPageHovered, setIsPageHovered] = useState(false);
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="https://via.placeholder.com/50"
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
                  className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
                  className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
                  className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isOpen ? (
                <RxCross1 className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
                  className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
                  className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
                  className="text-gray-700 hover:text-gray-900 py-2 rounded-md text-sm font-medium"
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
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
