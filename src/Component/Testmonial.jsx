import React from "react";
import Container from "../Component/Container.jsx";
import Heading from "../CommonComponent/Heading.jsx";
import Slider from "react-slick";

const Testmonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
  };
  var profile = [
    {
      id: 1,
      image: "../../src/assets/test1.png",
      name: "Jenny Wilson | ",
      role: "Digital Agency",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 2,
      image: "../../src/assets/test2.png",
      name: "Osman Jankovic | ",
      role: "UI/UX Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 3,
      image: "../../src/assets/test3.png",
      name: "Miroslav Seidl | ",
      role: "Graphic Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 4,
      image: "../../src/assets/test4.png",
      name: "Anke Horvath | ",
      role: "Programmer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 5,
      image: "../../src/assets/test5.png",
      name: "Katrin Ulrich | ",
      role: "Software Engineer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
  ];

  return (
    <div className="pt-[139px] pb-[61px]">
      <Container>
        <div className="flex justify-center items-center">
          <Heading
            headingContent={"Our "}
            lastContent={"Testimonials"}
            headingStyle={`inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] tracking-[2%]`}
          />
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {profile.map((data) => (
              <div key={data.id}>
                <div className="flex flex-col justify-center items-center gap-y-[28px] mt-[74px] cursor-pointer">
                  <picture>
                    <img
                      src={data.image}
                      alt={data.image}
                      className="w-[156px] h-[156px]  rounded-full"
                    />
                  </picture>
                  <p className="max-w-[864px] text-[18px] text-black-color font-normal font-lora leading-[176%] text-center">
                    {data.description}
                  </p>
                  <h3 className="text-[24px] text-black-color font-bold font-nunito leading-[100%] tracking-[5%] mb-[28px]">
                    {data.name}
                    <span className="text-[17px] text-black-color font-normal font-lora leading-[100%] tracking-[5%]">
                      {data.role}
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testmonial;
