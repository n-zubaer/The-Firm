import React from "react";
import Container from "../Component/Container.jsx";
import perfectLeftImage from "../assets/PerfectLeft.png";
import Heading from "../CommonComponent/Heading.jsx";
import Button from "../CommonComponent/Button.jsx";
const Business = () => {
  return (
    <div className="pb-[100px] ">
      <Container>
        <div className="flex justify-center items-center gap-x-[160px] ">
          <div>
            <picture>
              <img src={perfectLeftImage} alt={perfectLeftImage} />
            </picture>
          </div>
          <div className="max-w-[436px] flex flex-col items-start gap-y-[18px]">
            <Heading
              headingContent={"Perfect Solution for Your  "}
              lastContent={"Bussiness"}
              headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
            />
            <p className="text-[18px] font-normal font-lora text-black-color leading-[176%] mt-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <Button btnContent={"Read More"} 
            btnstyle={'px-[20px] py-[10px] text-[18px] text-whtie-color bg-yellow-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-black-color mt-[22px]'}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Business;
