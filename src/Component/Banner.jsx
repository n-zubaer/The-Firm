import React from "react";
import Container from "./Container";
import BannerRight from "../assets/BannerRight.png";
import Button from "../CommonComponent/Button.jsx";

const Banner = () => {
  return (
    <div class="bg-[url(/src/assets/bannerImage.png)] w-full bg-cover bg-no-repeat bg-center relative">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-[50%] pt-[176px] pb-[152px]">
            <h1 className="text-[48px] text-black-color font-nunito font-black leading-[133%] tracking-[2%] mb-[29px] ">
              Get Bussiness <br /> Solutions with{" "}
              <span className="text-[52px] font-black font-nunito">
                TheFirm.
              </span>
            </h1>
            <p className="text-[18px] text-black-color font-lora font-normal leading-[176%] tracking-[2%] max-w-[61%] mb-[32px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <Button
              btnContent={"Get in Touch"}
              btnstyle={
                "px-[20px] py-[10px] text-[18px] text-whtie-color bg-yellow-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-black-color"
              }
            />
          </div>
          <div className="absolute right-[16%] top-0 -z-10">
            <picture>
              <img
                src={BannerRight}
                alt={BannerRight}
                className="h-full w-full object-cover rounded-3xl shadow-amber-50"
              />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
