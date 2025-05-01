import React from "react";
import logo from "../assets/logo.png";
import Container from "../Component/Container.jsx";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const menuItem = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "Cases",
    },
    {
      id: 4,
      name: "About Us",
    },
    {
      id: 6,
      name: "Blog",
    },
    {
      id: 7,
      name: "Contact Us",
    },
  ];

  return (
    <footer className="pt-[100px] pb-[43px]">
      <Container>
        <div className="flex flex-col items-center justify-center gap-y-[60px]">
          <picture>
            <img src={logo} alt={logo} />
          </picture>
          <ul className="flex gap-x-[48px] ">
            {menuItem.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    className="menu text-[18px] text-black-color font-nunito font-bold"
                    href="#"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-x-[44px] cursor-pointer text-[20px]">
            <span className="hover:text-yellow-color"><FaFacebookF /></span>
            <span className="hover:text-yellow-color"><FaTwitter /></span>
            <span className="hover:text-yellow-color"><AiFillYoutube /></span>
            <span className="hover:text-yellow-color"><FaLinkedinIn /></span>
            <span className="hover:text-yellow-color"><FaPinterestP /></span>
          </div>
          <span className="text-[12px] text-[#A5A5A5] font-normal font-nunito leading-[133%] tracking-[5px]">Copyrights ©2020 Thefirm. All Right Reserved</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
