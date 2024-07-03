import React, { useState, useLayoutEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import supabase from "../../config/client";
import Dropdown from "../navbar/dropdown.jsx";
import Loader from '../loader.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPageHovered, setIsPageHovered] = useState(false);
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {  
    const fetchUser = async () => {
      setLoading(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log(user, "user");
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePageDropdown = () => {
    setIsPageHovered(!isPageHovered);
    setIsCategoriesHovered(false);
    setIsLocationHovered(false);
  };

  const handleCatogreyDropdown = () => {
    setIsCategoriesHovered(!isCategoriesHovered);
    setIsPageHovered(false);
    setIsLocationHovered(false);
  };

  const handleLocationDropdown = () => {
    setIsLocationHovered(!isLocationHovered);
    setIsCategoriesHovered(false);
    setIsPageHovered(false);
  };

  if(loading) { 
    return <Loader/>
  }

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10">
          <div className="flex justify-between h-16 md:h-20 mx-4 md:mx-0">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-green-800 italic">
                PixelPulse
              </h1>
            </div>
            <div className="hidden md:flex space-x-3 lg:space-x-10 items-center">
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
                  } absolute left-0 top-7 mt-2 w-52 bg-white shadow-lg rounded-sm py-2`}
                >
                  <div className="flex flex-col gap-1 px-6 py-2">
                    <a
                      href="#"
                      className="block text-start text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Customer Services
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Project Management
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Development
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Design
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Accounting
                    </a>
                  </div>
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
                  } absolute left-0 top-7 mt-2 w-36 bg-white shadow-lg rounded-sm py-2`}
                >
                  <div className="flex flex-col gap-1 px-6 py-2">
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Lahore
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Karachi
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Gujranwala
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Remote
                    </a>
                  </div>
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
                  } absolute left-0 top-7 mt-2 w-32 bg-white shadow-lg rounded-sm py-2`}
                >
                  <div className="flex flex-col gap-1 px-6 py-2">
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Sign In
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Sign Up
                    </a>
                    <a
                      href="#"
                      className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                    >
                      Forget
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              {user ? (
                <Dropdown />
              ) : (
                <Link
                  className="bg-green-200 text-green-900 hover:bg-green-900 hover:text-white px-5 py-2.5 rounded-md text-md font-semibold"
                  to={"/register"}
                >
                  Login / Register
                </Link>
              )}
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

        {/* // mobile navbe // */}

        <div
          className={`${isOpen ? "max-h-screen" : "max-h-0"}  ${
            isPageHovered || isLocationHovered || isCategoriesHovered
              ? "overflow-visible"
              : "overflow-hidden"
          } transition-all duration-500 ease-in-out md:hidden`}
        >
          <div className="px-8 pt-2 pb-3 space-y-1">
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

            <div className="relative">
              <div
                className="flex items-center w-32"
                onClick={handleCatogreyDropdown}
              >
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
                <div className="flex flex-col gap-1 px-6 py-2">
                  <a
                    href="#"
                    className="block text-start text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Customer Services
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Project Management
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Development
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Design
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Accounting
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="flex items-center w-32"
                onClick={handleLocationDropdown}
              >
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
                <div className="flex flex-col gap-1 px-6 py-2">
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Lahore
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Karachi
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Gujranwala
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Remote
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="flex items-center w-32"
                onClick={handlePageDropdown}
              >
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
                <div className="flex flex-col gap-1 px-6 py-2">
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Sign Up
                  </a>
                  <a
                    href="#"
                    className="block text-slate-600 hover:text-green-700 text-md font-semibold"
                  >
                    Forget
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-3">
              {user ? null : (
                <Link
                  className="bg-green-200 text-green-900 hover:bg-green-900 hover:text-white px-5 py-2.5 rounded-md text-md font-semibold"
                  to={"/register"}
                >
                  Login / Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
