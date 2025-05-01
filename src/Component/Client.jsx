import React from "react";
import Container from "../Component/Container.jsx";
import Heading from "../CommonComponent/Heading.jsx";
import ulmark from "../assets/question.png";
import clientChart from '../assets/clientChart.png'

const Client = () => {
  const ulItems = [
    {
      id: 1,
      problem: "Loren rasion gravida auem is bibenua tase",
    },
    {
      id: 2,
      problem: "Lorem Ipsum is simply dummy text of the.",
    },
    {
      id: 3,
      problem: "Printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 4,
      problem: "When an unknown printer took a galley of type and scrambled it",
    },
  ];

  return (
    <div className="pb-[100px] bg-[#FBFBFB]">
      <Container>
        <div className="pt-[89px] pb-[98px] flex items-center gap-[114px]">
          <div className="w-[38%]">
            <Heading
              headingContent={"Frustration of "}
              lastContent={"Clients"}
              headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
            />
            <p className="text-[18px] text-black-color font-lora font-normal leading-[176%] tracking-[2%] mt-[22px] mb-[26px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

         <ul className="text-[18px] text-black-color font-lora font-normal  flex flex-col gap-[10px] pl-[33px] leading-[176%]"> 
         {ulItems.map((item) => {
              return (
                <div className="flex items-center gap-[10px] " key={item.id}>
                  <img src={ulmark} alt={ulmark} className="mr-[2px]" />
                  <li key={item.id}>{item.problem}</li>
                </div>
              );
            })}
         </ul>
          </div>
          <div>
            <picture>
              <img src={clientChart} alt={clientChart} />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Client;
