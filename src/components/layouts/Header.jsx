import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logof.png";
import { Link } from "react-scroll";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";



const Header = () => {
  return (
    <>

      <Container className="fixed top-[10px] left-0 right-0 z-10 bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 shadow-md">
  <Flex className="justify-between items-center py-1 px-6 max-w-screen-xl mx-auto">
    {/* Logo Section */}
    <div className="bg-[#232323] px-4 rounded-lg shadow-lg hover:scale-105 transition-all ease-in-out">
      <Link to="/" smooth={true} duration={500} className="cursor-pointer">
        <Image imgSrc={Logo} alt="Logo" className="h-[36px]" />
      </Link>
    </div>

    {/* Navigation Section */}
    <div className="flex-grow ml-10">
      <ul className="flex justify-center gap-x-12 uppercase font-robo font-semibold text-white text-lg">
        {["Home", "About", "Skill", "Work", "Contact"].map((item, index) => (
            <li className="text-center">
          <Link key={index} to={item.toLowerCase()} smooth={true} duration={500} className="text-[#232323] transition-all hover:bg-gray-700 hover:text-[#fafafa] hover:rounded-md py-[7px] px-4 ease-in-out duration-300 cursor-pointer" activeClass="active" spy={true}>
              {item}
          </Link>
            </li>
        ))}
      </ul>
    </div>

    {/* Hire Me Button */}
    <div className="flex items-center justify-center">
      <Link to="hire" smooth={true} duration={500} className="cursor-pointer  text-white text-sm font-bold py-2 px-6 bg-teal-600 rounded-md hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300">
        HIRE ME
      </Link>
    </div>
  </Flex>
</Container>

    </>
  );
};

export default Header;

// px-5 py-2.5 text-white text-[14px] font-pop font-medium bg-mcolor rounded-3xl hover:bg-mhover duration-300 ease-in-out
