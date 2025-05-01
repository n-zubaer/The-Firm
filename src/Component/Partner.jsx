import React from "react";
import Container from "./Container";
import Heading from "../CommonComponent/Heading";
import Slider from "react-slick";
import {
  FaAmazonPay,
  FaAngleLeft,
  FaAngleRight,
  FaEdgeLegacy,
  FaFirefoxBrowser,
  FaWindows,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsBrowserSafari } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoBing } from "react-icons/bi";

const Partner = () => {
  const allIcons = [
    {
      id: 1,
      icons: <FaWindows />,
    },
    {
      id: 2,
      icons: <FcGoogle />,
    },
    {
      id: 3,
      icons: <FaFirefoxBrowser />,
    },
    {
      id: 4,
      icons: <BsBrowserSafari />,
    },
    {
      id: 5,
      icons: <FaAmazonPay />,
    },
    {
      id: 6,
      icons: <TbBrandVscode />,
    },
    {
      id: 7,
      icons: <FaEdgeLegacy />,
    },
    {
      id: 8,
      icons: <BiLogoBing />,
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#F6F6F6",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "-2",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "3",
        }}
        onClick={onClick}
      >
        <div className="flex justify-center items-center h-full  rounded-full text-black-color ">
          <FaAngleLeft />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#F6F6F6",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "3",
        }}
        onClick={onClick}
      >
        <div className="flex justify-center items-center h-full rounded-full text-black-color">
          <FaAngleRight />
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Container>
        <div className="py-[100px]">
          <div className="flex justify-center items-center ">
            <Heading
              headingContent={"Our"}
              lastContent={"Partner"}
              headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
            />
          </div>
          <div className="slider-container mt-[25px]">
            <Slider {...settings}>
              {allIcons?.map((item) => (
                <div key={item.id} className="px-[40px] cursor-pointer ">
                  <span className="w-[240px] h-[120px] bg-gray-color flex justify-center items-center text-[64px] rounded-md">
                    {item.icons}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Partner;
