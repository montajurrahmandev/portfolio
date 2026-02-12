import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Skill = () => {
  return (
    <>
      <section id="skill" className="py-20 bg-gray-700 text-gray-300">
        <Container>
          <div className=" mx-auto">
            <div className="pb-8 text-center mb-12">
              <Heading
                text="Skills & Expertise"
                as="h2"
                className="text-[40px] font-bold"
              />

              <p className="text-[18px] pt-2  mx-auto text-gray-300">
                Get to know the developer behind the code — where creativity
                meets functionality. Every line of code has a story. This is
                mine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Frontend Skills */}
              <div className="bg-slate-600 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🎨</span> Frontend Development
                </h3>
                <ul className="space-y-2 text-lg pl-12 list-disc">
                  <li>HTML5, CSS3, Sass, JavaScript (ES6+)</li>
                  <li>React, Next.js</li>
                  <li>Redux Toolkit, React Router DOM</li>
                  <li>Context API implementation and integration</li>

                  <li>Tailwind CSS, Bootstrap</li>
                  <li>
                    Material UI (MUI), Chakra UI, Ant Design, Shadcn, React
                    Bootstrap, DaisyUI, Flowbite, HyperUI, Preline UI
                  </li>
                
                  <li>
                    Framer Motion, CSS Animations, Transitions,
                    Micro-interactions
                  </li>
                  <li>
                    React Hook Form, React Query, Swiper.js, jQuery, Alpine.js,
                    React Toastify
                  </li>
                  <li>Font Awesome, React Icons, Bootstrap Icons, IconScout</li>
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-slate-600 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-4 ">
                  <span className="size-8">🛠</span> Tools & Technologies
                </h3>
                <ul className="space-y-2 text-lg pl-12">
                  <li>Git & GitHub</li>
                
                  {/* <li>Axios & Fetch</li> */}
                  <li>VS Code</li>
                  <li>npm, npx, pnpm, yarn</li>
                  <li>Postman</li>
                  <li>Figma, Photoshop, Adobe XD, Sketch </li>
                </ul>
              </div>

              {/* Soft Skills + Learning */}
              <div className="bg-slate-600 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🚀</span> Soft Skills & Learning
                </h3>
                <ul className="space-y-2 text-lg pl-12">
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Time Management</li>
                  <li>Problem-Solving</li>
                  <li>Organizing & Documentation</li>
                  <li className="font-semibold text-white pt-2">
                    📚 Current Focus:
                  </li>
                  <li>NodeJS, ExpressJS, MongoDB</li>
                  <li>Full-Stack Web Development</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Skill;
