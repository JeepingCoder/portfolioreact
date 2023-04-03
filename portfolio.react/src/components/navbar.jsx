import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Hannah.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navi, setNavi] = useState(false);
  const handleClick = () => setNavi(!navi);

  return (
    <div className="fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#333333] text-[#AD8F18] text-2xl ">
      <div>
        <img
          className="rounded-full"
          src={Logo}
          alt="logo"
          style={{ width: "155px" }}
        />
      </div>
      
      <div>
        <ul className="hidden md:flex  ">
          <li>
            <Link to="Home"smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
          <Link to="About"smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
          <Link to="Applications"smooth={true} duration={500}>
              Applications
            </Link>
          </li>
          <li>
          <Link to="Contact"smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className=" md:hidden z-10">
        {!navi ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !navi
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center "
        }
      >
        <li>
        <Link to="Home"smooth={true} duration={500}>
              Home
            </Link>
        </li>
        <li>
        <Link to="About"smooth={true} duration={500}>
              About
            </Link>
        </li>
        <li><Link to="Applications"smooth={true} duration={500}>
              Applications
            </Link>
        </li>
        <li>
        <Link to="Contact"  smooth={true}>
              Contact
            </Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#238636] font-Ubuntu rounded-md">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px] hover:ml-[-10px] duration-600 bg-[#0a66c2] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px] hover:ml-[-10px] duration-600 bg-[#1D9BF0] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Twitter <FaTwitter size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px] hover:ml-[-10px] duration-600 bg-[hsl(39,100%,50%)] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#555D50] rounded-md ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;
