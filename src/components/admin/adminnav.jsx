import React, { useState, useLayoutEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import supabase from "../../config/client";
import Dropdown from "../landingpage/dropdown.jsx";
import Loader from "../loader.jsx";

const AdminNav = () => {

  const[isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        // console.log(user, "user");
        setUser(user);
      } catch (error) {
        // console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();
    if (error) {
      // console.error("Error logging out:", error);
    } else {
      window.location.reload();
    }
  };

 

  if (loading) {
    return <Loader />;
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
            <div className="flex items-center">
                <div className="relative">
                  <Dropdown handleLogout={handleLogout} />
                </div>
            
            </div>
            {/* <div className="flex md:hidden items-center">
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
            </div> */}
          </div>
        </div>

        {/* // mobile navbe // */}

       
      </nav>
      <Outlet />
    </>
  );
};

export default AdminNav;
