import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Input from "../Input";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub, FaLocationDot, FaSquarePhone, FaSquareXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-700 pt-20 pb-10 mt-10">
        <Container className="flex justify-between">
          <div className="flex flex-col items-center text-[16px]">
            <div className="bg-white  size-[200px] rounded-full flex flex-col justify-center text-center">
              <Heading text="i'm available for" as="h5" />
              <Heading text="freelance work" as="h5" />
            </div>
            <p className="text-white pt-4 ">montajur.rahman.dev@gmail.com</p>
          </div>
          <div className="text-white flex flex-col gap-y-6 ">
            <p className="flex items-center gap-x-3 text-[16px]">
              
                <FaSquarePhone /> <span className="w-[85px]" >Phone</span>: <span>+8801310951801</span>
              
        
            </p>
            <p className="flex items-center gap-x-3 text-[16px]">
              
                <RiWhatsappFill /> <span className="w-[85px]">What's App</span>: <span>+8801310951801</span>
              
        
            </p>
            <p className="flex items-center gap-x-3 text-[16px]">
              
                <FaLocationDot /> <span className="w-[85px]">Location</span>: <span>Dhaka, Bangladesh</span>
              
        
            </p>

       
          </div>
          <div className="text-white flex flex-col gap-y-6">
            <p className="flex gap-x-11">
              <Link className="flex items-center gap-x-3 text-[16px] w-[130px]">
                <FaLinkedin /> Linkedin
              </Link>
              <Link className="px-4 py-0 border rounded-full hover:bg-white hover:text-black">
                Follow
              </Link>
            </p>
            <p className="flex gap-x-11">
              <Link className="flex items-center gap-x-3 text-[16px] w-[130px]">
                <FaGithub /> GitHub
              </Link>
              <Link className="px-4 py-0 border rounded-full hover:bg-white hover:text-black">
                Follow
              </Link>
            </p>
            <p className="flex gap-x-11">
              <Link className="flex items-center gap-x-3 text-[16px] w-[130px]">
                <FaFacebook /> Facebook
              </Link>
              <Link className="px-4 py-0 border rounded-full hover:bg-white hover:text-black">
                Follow
              </Link>
            </p>
            <p className="flex gap-x-11">
              <Link className="flex items-center gap-x-3 text-[16px] w-[130px]">
                <FaSquareXTwitter /> X ~Twitter
              </Link>
              <Link className="px-4 py-0 border rounded-full hover:bg-white hover:text-black">
                Follow
              </Link>
            </p>
            <p className="flex gap-x-11">
              <Link className="flex items-center gap-x-3 text-[16px] w-[130px]">
                <FaSquareXTwitter /> X ~Twitter
              </Link>
              <Link className="px-4 py-0 border rounded-full hover:bg-white hover:text-black">
                Follow
              </Link>
            </p>
          </div>
        </Container>
      </div>
      <Container className={"grid justify-center py-10"}>
        <Heading
          className="text-[50px] font-bold text-center "
          text="Contact Me"
          as="h3"
        />
        <div className="grid py-12 text-[#232323] gap-y-7">
          <Input
            type={"text"}
            placeholder={"Name"}
            className={"outline-0 py-3 pl-2"}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            className={"outline-0 py-3 pl-2"}
          />
          <textarea
            name="text"
            id="text"
            placeholder="Your Message"
            className="w-[700px] bg-gray-100 outline-0 py-3 h-[100px] pl-2"
            required
          ></textarea>
        </div>
        <div className="m-auto">
          <input
            type="submit"
            value="Submit"
            className={
              "w-fit py-3 px-7 bg-black text-white rounded-2xl cursor-pointer hover:bg-white hover:text-black hover:outline-1 ease-in-out duration-300 "
            }
          />
        </div>
      </Container>
    </>
  );
};

export default Contact;
