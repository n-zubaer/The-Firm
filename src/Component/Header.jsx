import React from "react";
import Container from "./Container.jsx";
import logo from "../assets/logo.png";
import Button from "../CommonComponent/Button.jsx";

const Header = () => {
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
    <>
      <Container>
        <div className="mt-[20px] flex items-center">
          <picture>
            <img src={logo} alt={logo} 
            className="cursor-pointer"/>
          </picture>
          <div className="flex items-center">
            <div className="mr-[50px]">
              <ul className="flex gap-x-[48px] pl-[215px]">
                {menuItem.map((item) => {
                  return (
                    <li key={item.id}>
                      <a className="menu text-[18px] text-black-color font-nunito font-bold" href="#">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Button
              btnstyle="px-[20px] py-[10px] text-[18px] text-whtie-color bg-yellow-color font-nunito font-bold rounded-[5px] cursor-pointer hover:bg-black-color"
              btnContent={"Get in Touch"}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
