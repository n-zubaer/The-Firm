import React from "react";
import Container from "../Component/Container.jsx";
import Heading from "../CommonComponent/Heading";
import Button from "../CommonComponent/Button.jsx";

const Contact = () => {
  return (
    <div className="bg-[url(/src/assets/map.png)] w-full bg-cover bg-no-repeat bg-center h-[396px] relative mb-[280px]">
      <Container>
        <div className="infoContact flex items-center justify-center flex-col w-[938px] rounded-[15px]">
          <div>
            <Heading
              headingContent={"Get in "}
              lastContent={"Touch"}
              headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-32 items-center gap-y-10 mt-14 w-full ">
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-[14px] text-[#A5A5A5] font-normal leading-[133%] tracking-[2%] py-[10px]"
              >
                Name
              </label>
              <input
                type="text"
                className="border-b-[2px]  border-[#A5A5A5] outline-none pb-[12px]"
                placeholder="Lorem Ipusum"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-[14px] text-[#A5A5A5] font-normal leading-[133%] tracking-[2%] py-[10px]"
              >
                Email
              </label>
              <input
                type="text"
                className="border-b-[2px]  border-[#A5A5A5] outline-none pb-[12px]"
                placeholder="LoremIpusum@mail.com"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-[14px] text-[#A5A5A5] font-normal leading-[133%] tracking-[2%] py-[10px]"
              >
                Phone
              </label>
              <input
                type="text"
                className="border-b-[2px]  border-[#A5A5A5] outline-none pb-[12px]"
                placeholder="+0 968 856 1524"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-[14px] text-[#A5A5A5] font-normal leading-[133%] tracking-[2%] py-[10px]"
              >
                Subject
              </label>
              <select className="border-b-[2px]  border-[#A5A5A5] outline-none pb-[12px] text-[14px] text-[#A5A5A5] font-normal ">
                <option>Choose your subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              btnContent={"Submit"}
              btnstyle={
                "px-[20px] py-[10px] text-[18px] text-whtie-color bg-yellow-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-black-color mt-[67px]"
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
