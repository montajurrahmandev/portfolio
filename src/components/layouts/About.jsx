import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const About = () => {
  return (
    <div className="pt-20 mt-10 pb-10 bg-gray-700 text-white ">
      <Container>
        <div className=" pb-8">
          <Heading
            text="About"
            as="h2"
            className="text-[40px] font-bold text-center "
          />
          <Heading
            text="This is all about me.That's a fun request! A great 'About Me' title should be engaging and quickly communicate your value or personality."
            as="h5"
            className="text-[18px] text-center pt-2"
          />
        </div>
        <div className="flex justify-between">
          <div className="bg-amber-200 w-1/2 h-[300px] pr-[50px] ">
                    <Heading
            text="Qualification"
            as="h5"
            className="text-[18px] font-bold text-center py-2"
          />
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              harum saepe in voluptas, repellendus placeat consectetur enim
              commodi natus a sapiente error beatae accusantium veritatis
              impedit eius dolore ipsa praesentium tenetur explicabo iste
              doloribus molestias. Vero error ducimus officiis cum unde facilis
              consequuntur! Quaerat nulla, numquam quis error laborum animi!
            </p>
          </div>
          <div className="bg-amber-600 w-1/2 h-[300px] pl-[50px] ">
                    <Heading
            text="Details"
            as="h5"
            className="text-[18px] font-bold text-center py-2"
          />
                      <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              harum saepe in voluptas, repellendus placeat consectetur enim
              commodi natus a sapiente error beatae accusantium veritatis
              impedit eius dolore ipsa praesentium tenetur explicabo iste
              doloribus molestias. Vero error ducimus officiis cum unde facilis
              consequuntur! Quaerat nulla, numquam quis error laborum animi!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
