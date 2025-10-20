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
      <Container className={"fixed  top-0 right-0 left-0 z-10"}>
        <Flex className={"justify-between py-7 "}>
          <div className="">
            <Link to="/" smooth={true} duration={500} className="cursor-pointer" >
              <Image imgSrc={Logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-x-10 uppercase font-robo font-bold text-[16px]">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer" >
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Home
                </li>
              </Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer" >
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  About
                </li>
              </Link>
              <Link to="skill" smooth={true} duration={500} className="cursor-pointer" >
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Skill
                </li>
              </Link>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer" >
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Work
                </li>
              </Link >
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <div className="p-7 py-3.5 text-black text-[14px] font-robo bg-teal-500 uppercase rounded-3xl hover:bg-gray-400 hover:text-white ease-in-out duration-300">
              HIRE ME
            </div>
          </div>
        </Flex>

      </Container>
    </>
  );
};

export default Header;

// px-5 py-2.5 text-white text-[14px] font-pop font-medium bg-mcolor rounded-3xl hover:bg-mhover duration-300 ease-in-out
