import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navnarnew.css";

//import Logo from "../../assets/Logo.png";
//import Button from "../Button";
import NavbarLink from "./NavbarLink";

const NavbarNew = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-aliceblue h-15">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
         <img src="rgs-img/logo.png" alt="" className="md:cursor-pointer h-9" />
       
         </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase  items-center gap-8 font-[Poppins]">
      
          {/* <li> 
 
             <Link to="/" className="py-7 px-3 inline-block"> 
               Home 
             </Link> 
         
           
  </li> 
  */}
   <NavbarLink /> 
           
           {/* <li> 
          <Link to="/success" className="py-7 px-3 inline-block">
              Success Stories
            </Link>
          </li>*/}

          <li>
          <Link to="/career" className="py-7 px-3 inline-block  text-black hover:text-[#00ffff]">
              Careers
            </Link>
          </li>

          <li>
          <Link to="/blog" className="py-7 px-3 inline-block  text-black hover:text-[#00ffff]">
              Blogs
            </Link>
          </li>

         <div className="nav-search-data">
          <li>
          <Link to="/search" className=" ">
              <img className="h-6  " src="rgs-img/search-nav.png" alt=""></img>
            </Link>
          </li>
        </div>
          

          <li>
          <Link to="/contact" className="py-5 px-11 inline-block mx-20  bg-[#00ffff] ">
              Contact
            </Link>
          </li>
          {/* <NavbarLink /> */}
        </ul>

       

        <div className="md:block hidden">
          {/* <Button /> */}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavbarLink />
          {/* <div className="py-5"> 
            <Button />
          </div>*/}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarNew;