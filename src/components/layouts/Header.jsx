import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logof.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <Container className={"fixed  top-0 right-0 left-0 z-10"}>
        <Flex className={"justify-between py-7 "}>
          <div className="">
            <Link>
              <Image imgSrc={Logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-x-10 uppercase font-robo text-[16px]">
              <Link>
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Home
                </li>
              </Link>
              <Link>
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  About
                </li>
              </Link>
              <Link>
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Skill
                </li>
              </Link>
              <Link>
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Work
                </li>
              </Link>
              <Link>
                <li className=" hover:bg-gray-400 hover:text-[#fafafa] ease-in-out duration-300 hover:rounded-[8px]">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <Link className="p-7 py-3.5 text-black text-[14px] font-robo bg-teal-500 uppercase rounded-3xl hover:bg-gray-400 hover:text-white ease-in-out duration-300">
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
