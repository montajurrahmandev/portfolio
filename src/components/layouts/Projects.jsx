import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import project_01 from "/src/assets/P-1.webp";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Container className={"pt-20"}>
      <div className="pb-8">
        <Heading
          text="Project Gallery"
          as="h2"
          className="text-[40px] font-bold text-center "
        />
        <Heading
          text="This is all about me.That's a fun request! A great 'About Me' title should be engaging and quickly communicate your value or personality."
          as="h5"
          className="text-[18px]  text-center pt-2"
        />
      </div>
      <div className="flex justify-between items-center flex-wrap text-center gap-y-5 ">

        <div className="w-1/3  p-5 drop-shadow-2xl drop-shadow-gray-500">
          <div className="bg-amber-50">
            <div className="relative group">
              <Image className={"h-[300px] w-full"} imgSrc={project_01} />
              <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-70 flex flex-col justify-center items-center">
                <Heading
                  className="text-[16px] text-white font-bold text-center bg-amber-400 px-5  "
                  text="Frontend Development"
                  as="p"
                />
                <p className="text-[16px] text-white text-center pt-4 pb-3 flex gap-x-2 mb-[50px]">
                  
                  <Heading className="font-bold" text="Client:" as="p" />
                  <Heading className="" text="Montajur Rahman" as="p" />
                </p>
                 <Link > <Heading className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black text-center" text="LIVE" as="p" /></Link>
              </div>
              </div>
            </div>
            <Heading
              className="text-[16px]  text-center py-2"
              text="E-Commerce"
              as="p"
            />
          </div>
        </div>
        <div className="w-1/3  p-5 drop-shadow-2xl drop-shadow-gray-500">
          <div className="bg-amber-50">
            <div className="relative group">
              <Image className={"h-[300px] w-full"} imgSrc={project_01} />
              <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-70 flex flex-col justify-center items-center">
                <Heading
                  className="text-[16px] text-white font-bold text-center bg-amber-400 px-5  "
                  text="Frontend Development"
                  as="p"
                />
                <p className="text-[16px] text-white text-center pt-4 pb-3 flex gap-x-2 mb-[50px]">
                  
                  <Heading className="font-bold" text="Client:" as="p" />
                  <Heading className="" text="Montajur Rahman" as="p" />
                </p>
                 <Link > <Heading className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black text-center" text="LIVE" as="p" /></Link>
              </div>
              </div>
            </div>
            <Heading
              className="text-[16px]  text-center py-2"
              text="E-Commerce"
              as="p"
            />
          </div>
        </div>
        <div className="w-1/3  p-5 drop-shadow-2xl drop-shadow-gray-500">
          <div className="bg-amber-50">
            <div className="relative group">
              <Image className={"h-[300px] w-full"} imgSrc={project_01} />
              <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-70 flex flex-col justify-center items-center">
                <Heading
                  className="text-[16px] text-white font-bold text-center bg-amber-400 px-5  "
                  text="Frontend Development"
                  as="p"
                />
                <p className="text-[16px] text-white text-center pt-4 pb-3 flex gap-x-2 mb-[50px]">
                  
                  <Heading className="font-bold" text="Client:" as="p" />
                  <Heading className="" text="Montajur Rahman" as="p" />
                </p>
                 <Link > <Heading className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black text-center" text="LIVE" as="p" /></Link>
              </div>
              </div>
            </div>
            <Heading
              className="text-[16px]  text-center py-2"
              text="E-Commerce"
              as="p"
            />
          </div>
        </div>
        <div className="w-1/3  p-5 drop-shadow-2xl drop-shadow-gray-500">
          <div className="bg-amber-50">
            <div className="relative group">
              <Image className={"h-[300px] w-full"} imgSrc={project_01} />
              <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-70 flex flex-col justify-center items-center">
                <Heading
                  className="text-[16px] text-white font-bold text-center bg-amber-400 px-5  "
                  text="Frontend Development"
                  as="p"
                />
                <p className="text-[16px] text-white text-center pt-4 pb-3 flex gap-x-2 mb-[50px]">
                  
                  <Heading className="font-bold" text="Client:" as="p" />
                  <Heading className="" text="Montajur Rahman" as="p" />
                </p>
                 <Link > <Heading className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black text-center" text="LIVE" as="p" /></Link>
              </div>
              </div>
            </div>
            <Heading
              className="text-[16px]  text-center py-2"
              text="E-Commerce"
              as="p"
            />
          </div>
        </div>
        <div className="w-1/3  p-5 drop-shadow-2xl drop-shadow-gray-500">
          <div className="bg-amber-50">
            <div className="relative group">
              <Image className={"h-[300px] w-full"} imgSrc={project_01} />
              <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-70 flex flex-col justify-center items-center">
                <Heading
                  className="text-[16px] text-white font-bold text-center bg-amber-400 px-5  "
                  text="Frontend Development"
                  as="p"
                />
                <p className="text-[16px] text-white text-center pt-4 pb-3 flex gap-x-2 mb-[50px]">
                  
                  <Heading className="font-bold" text="Client:" as="p" />
                  <Heading className="" text="Montajur Rahman" as="p" />
                </p>
                 <Link > <Heading className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black text-center" text="LIVE" as="p" /></Link>
              </div>
              </div>
            </div>
            <Heading
              className="text-[16px]  text-center py-2"
              text="E-Commerce"
              as="p"
            />
          </div>
        </div>
        <div className="w-1/3  p-5 drop-shadow-2xl drop-shadow-gray-500">
          <div className="bg-amber-50">
            <div className="relative group">
              <Image className={"h-[300px] w-full"} imgSrc={project_01} />
              <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-70 flex flex-col justify-center items-center">
                <Heading
                  className="text-[16px] text-white font-bold text-center bg-amber-400 px-5  "
                  text="Frontend Development"
                  as="p"
                />
                <p className="text-[16px] text-white text-center pt-4 pb-3 flex gap-x-2 mb-[50px]">
                  
                  <Heading className="font-bold" text="Client:" as="p" />
                  <Heading className="" text="Montajur Rahman" as="p" />
                </p>
                 <Link > <Heading className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black text-center" text="LIVE" as="p" /></Link>
              </div>
              </div>
            </div>
            <Heading
              className="text-[16px]  text-center py-2"
              text="E-Commerce"
              as="p"
            />
          </div>
        </div>
       
      </div>
    </Container>
  );
};

export default Projects;
