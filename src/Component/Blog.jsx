import React from "react";
import Heading from "../CommonComponent/Heading.jsx";
import Container from "../Component/Container.jsx";
import Card from "../CommonComponent/Card.jsx";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.jpg";
import mini1 from "../assets/mini1.png";
import mini2 from "../assets/mini2.png";
import mini3 from "../assets/mini3.png";
import Button from "../CommonComponent/Button.jsx";

const Blog = () => {
  return (
    <div className="py-[82px] bg-[#F2F2F2]">
      <Container>
        <div className="flex justify-center items-center">
          <Heading
            headingContent={"Our "}
            lastContent={"Blogs"}
            headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
          />
        </div>

        <div className="flex items-center justify-between mt-[64px]">
          <Card
            image={Blog1}
            heading={"Lorem Ipsum is "}
            info={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen."
            }
            profile={mini1}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />
          <Card
            image={Blog2}
            heading={"Lorem Ipsum is "}
            info={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen."
            }
            profile={mini2}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />
          <Card
            image={Blog3}
            heading={"Lorem Ipsum is "}
            info={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen."
            }
            profile={mini3}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />
        </div>

        <div className="flex justify-center items-center mt-[35px]">
          <Button
            btnContent={"View More"}
            btnstyle={
              "px-[20px] py-[10px] text-[18px] text-whtie-color bg-yellow-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-black-color"
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
