import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Image";
import UIE_one from "/src/assets/UIE_one.png";
import UIE_two from "/src/assets/UIE_two.png";

const UiElements = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container className={"py-10"}>
        <div className="">
          <Heading
            text="UI Elements Showcase"
            as="h2"
            className="text-[40px] font-bold text-center "
          />
        </div>
        <Slider  {...settings}>
          <div>
            <Image imgSrc={UIE_one} className={"h-[300px]"}/>
          </div>
          <div>
            <Image imgSrc={UIE_two} className={""}/>
          </div>
      
          <div>
            <Image imgSrc={UIE_one} className={"h-[300px]"}/>
          </div>
          <div>
            <Image imgSrc={UIE_two} className={""}/>
          </div>
      
          
        </Slider>
        
      </Container>
    </>
  );
};

export default UiElements;
