import React from "react";
import Container from "../Component/Container.jsx";
import Heading from "../CommonComponent/Heading.jsx";
import AnotherBtn from "../CommonComponent/AnotherBtn.jsx";
import BrandImage from "../assets/brand.png";
import Brandlogo from "../assets/brandLogo.png";
import Button from '../CommonComponent/Button.jsx'

const Choose = () => {
  return (
    <div className="py-[100px] bg-[#F2F2F2]">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <Heading
            headingContent={"Reason to Choose "}
            lastContent={"Us"}
            headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
          />
          <p className="w-[848px] text-[18px] text-black-color font-normal font-lora leading-[176%] text-center mt-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="flex items-center justify-between gap-x-[62px] mt-[50px]">
            <AnotherBtn
              design={
                "customBtn px-[14px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color border-none"
              }
              btnContent={"Market Research"}
            />
            <AnotherBtn
              design={
                "customBtn px-[14px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color border-none"
              }
              btnContent={"Branding"}
            />
            <AnotherBtn
              design={
                "customBtn px-[14px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color border-none"
              }
              btnContent={"Reporting"}
            />
            <AnotherBtn
              design={
                "customBtn px-[14px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color border-none"
              }
              btnContent={"Data Analysis"}
            />
          </div>
        </div>

       <div className="bg-whtie-color rounded-[30px] mt-[60px] flex items-center justify-center gap-x-[60px] ">
       <div className="py-[67px] pl-[41px] w-[50%]">
          <picture>
            <img src={BrandImage} alt={BrandImage} />
          </picture>
        </div>
        <div className="flex w-[50%] pr-[45px]">
          <picture>
            <img src={Brandlogo} alt={Brandlogo} />
          </picture>
          <div className="flex flex-col items-start ">
            <Heading 
            lastContent={'Branding'}
            headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
            />
            <p className="text-[18px] font-lora font-normal text-black-color leading-[176%] max-w-[645px] mb-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            <Button
            btnContent={'Read More'}
            btnstyle={'px-[20px] py-[10px] text-[18px] text-whtie-color bg-black-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-yellow-color'}
            />

          </div>
        </div>
       </div>
      </Container>
    </div>
  );
};

export default Choose;
