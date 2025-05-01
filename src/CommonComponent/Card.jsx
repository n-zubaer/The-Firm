import React from "react";
import Button from "../CommonComponent/Button.jsx";

const Card = ({ image, heading, info, profile, profileName, time }) => {
  return (
    <div className="card cursor-pointer hover:shadow-md shadow-[#ede1af]">
      <picture>
        <img src={image} alt={image}  className="rounded-[15px]"/>
      </picture>
      <div className="max-w-[269px] ml-[11px] mt-[27px] ">
        <h3 className="text-[24px] text-black-color font-bold font-nunito leading-[100%]">{heading}</h3>
        <p className="max-w-[308px] text-[17px] text-black-color font-normal font-lora leading-[176%] mt-[9px] mb-[27px]">{info}</p>
      </div>
      <div >
        <div className="flex items-center border-t border-gray-500 ">
         <div className="flex items-center ml-[11px] mt-[20px]">
         <img src={profile} alt={profile} />
         <h4 className="tex-[14px] text-black-color font-normal font-nunito leading-[100%]">{profileName}</h4>
         </div>
         <div className="mt-[20px]">
          <p className="text-[10px] text-[#B0B0B0] font-nunito font-normal ml-[82px]">{time}</p>
        </div>
          
        </div>
       
        <div className="flex justify-center items-center">
          <Button
            btnContent={"Read More"}
            btnstyle={
            "px-[20px] py-[10px] text-[18px] text-whtie-color bg-yellow-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-black-color mt-[25px]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
