import React from "react";
import Heading from "../CommonComponent/Heading";
import Container from "../Component/Container.jsx";
import Button from "../CommonComponent/Button.jsx";
import researchImage from "../assets/research.png";
const Research = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <Heading
            headingContent={"Our Research & Case "}
            lastContent={"Studies"}
            headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
          />
          <p className="text-[18px] text-black-color font-normal font-lora leading-[176%] w-[762px] text-center mt-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <div className="flex items-center justify-between mt-[60px]">
          <div className="w-[35%]">
            <Heading
              headingContent={"Lorem Ipsum is simply"}
              headingStyle={
                "inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]"
              }
            />
            <p className="text-[18px] text-black-color font-normal font-lora leading-[176%] mb-[21px] mt-[13px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took.
            </p>
            <Button
              btnContent={"Read More"}
              btnstyle={`px-[20px] py-[10px] text-[18px] text-whtie-color bg-yellow-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-black-color mt-[21px]`}
            />
          </div>

          <div>
            <picture>
              <img
                src={researchImage}
                alt={researchImage}
                className="border-white border-5 rounded-3xl"
              />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Research;
