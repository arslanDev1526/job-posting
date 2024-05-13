import React, { useEffect, useState, useRef } from "react";
import NavItem from './navitem'
import Dropdown from './dropdown'
import { Outlet } from "react-router-dom";

const Navbar = () => {
    const myRef = useRef();
    const buttonRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(()=> { 
    const checkIfClickedOutsie = e => { 
        if(show && myRef.current && !buttonRef.current.contains(e.target)) { 
            setShow(false);
        }
    }
    document.addEventListener("mousedown",checkIfClickedOutsie )

    return () => {
        document.removeEventListener("mousedown", checkIfClickedOutsie)
      }
  },[show])

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
   <>
   <NavItem toggle={toggleMenu} buttonRef={buttonRef}/>
    {/* <Dropdown show = {show} myRef = {myRef}/> */}
    <Outlet/>
   </>
  
  )
}

export default Navbar