import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Image";
import UIE_one from "/src/assets/UIE_one.png";
import UIE_two from "/src/assets/UIE_two.png";
import UIE_three from "/src/assets/UIE_three.png";
import UIE_four from "/src/assets/UIE_four.png";
import UIE_five from "/src/assets/UIE_five.png";
import UIE_six from "/src/assets/UIE_six.png";

const UiElements = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <>
      <Container className={"pb-10 pt-20"}>
        <div className="pb-8">
          <Heading
            text="UI Elements Showcase"
            as="h2"
            className="text-[40px] font-bold text-center "
          />
          <Heading
            text="This is all about me.That's a fun request! A great 'About Me' title should be engaging and quickly communicate your value or personality."
            as="h5"
            className="text-[18px]  text-center pt-2"
          />
        </div>
        <div className="">
          <Slider {...settings}>
            <div className="drop-shadow-2xl py-10 px-5 drop-shadow-gray-500">
              <div className="h-[300px] flex items-center justify-center">
                <Image imgSrc={UIE_one} className={"h-full "} />
              </div>
            </div>
            <div className=" drop-shadow-2xl py-10 px-5  drop-shadow-gray-500 ">
              <div className="h-[300px] flex items-center justify-center ">
                <Image imgSrc={UIE_two} className={" h-full  "} />
              </div>
            </div>
            <div className="drop-shadow-2xl py-10 px-5 drop-shadow-gray-500 ">
              <div className="h-[300px] flex items-center justify-center">
                <Image imgSrc={UIE_three} className={"h-full "} />
              </div>
            </div>
            <div className="drop-shadow-2xl py-10 px-5 drop-shadow-gray-500 ">
              <div className="h-[300px] flex items-center justify-center">
                <Image imgSrc={UIE_four} className={"h-full "} />
              </div>
            </div>
            <div className="drop-shadow-2xl py-10 px-5 drop-shadow-gray-500 ">
              <div className="h-[300px] flex items-center justify-center">
                <Image imgSrc={UIE_five} className={"h-full "} />
              </div>
            </div>
            <div className="drop-shadow-2xl py-10 px-5 drop-shadow-gray-500 ">
              <div className="h-[300px] flex items-center justify-center">
                <Image imgSrc={UIE_six} className={"h-full "} />
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default UiElements;
