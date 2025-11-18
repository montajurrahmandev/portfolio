import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import project_01 from "/src/assets/project-01.png";
import project_02 from "/src/assets/project-02.png";
import project_03 from "/src/assets/project-03.png";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
<section id="work">
      <Container className={"pt-20"} >
      <div className="pb-8" >
        <Heading
          text="Project Gallery"
          as="h2"
          className="text-[40px] font-bold text-center "
        />
        <p className="text-[18px]  text-center pt-2">A showcase of my recent projects, featuring clean UI, modern frontend development, and responsive user experiences.</p>

      </div>
      <div className="flex justify-between items-center flex-wrap text-center gap-y-5 -mx-5">
        <ProjectCard projectImg={project_01} projectType="Frontend Development" projectCategory="E-Commerce" clientName="Practice Project" liveUrl="https://orebi-website-frontend.netlify.app/" codeUrl={"https://github.com/montajurrahmandev/orebi_website_frontend"} className="" />
        <ProjectCard projectImg={project_02} projectType="Frontend Development" projectCategory="E-Commerce" clientName="Practice Project" liveUrl="https://montajurrahmandev.github.io/furniro_website_frontend/" codeUrl={"https://github.com/montajurrahmandev/furniro_website_frontend"} className="" />
        <ProjectCard projectImg={project_03} projectType="Frontend Development" projectCategory="E-Commerce" clientName="Practice Project" liveUrl="https://tech-e-commerce-with-react-and-boot.vercel.app/" codeUrl={"https://github.com/montajurrahmandev/tech_e-commerce_with_react_and_bootstrap"} className="" />
       
      </div>

    </Container>
</section>
  );
};

export default Projects;
