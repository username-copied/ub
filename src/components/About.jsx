import React from "react";
import Logo from "../assests/logo.jpg";
import Temple from "../assests/Temple.svg";
import Rangoli from "../assests/Rangoli2.png";
import Navbar from "./Navbar";
import Shreya from "../assests/Shreya.jpg";
import Devansh from "../assests/Devansh.jpeg";
import Rahul from "../assests/Rahul.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="text-white relative  ">
        <img className="w-full h-[100vh] " src={Rangoli} alt="BGIMG" />
        <div className="absolute top-[10px] left-[10px] font-bold text:2xl md:text-3xl">
          <div className="flex justify-around items-center">
            <img
              className="bg-[#a71111] rounded-md p-2 drop-shadow-2xl h-[200px] hover:scale-110 ease-in-out duration-150"
              src={Logo}
              alt="Logo"
            />
            <p className="text-xs sm:text-sm text-start w-[80%]">
              Utkrishta Bharat is a students group of National Institute of
              Technology, Karnataka. It is motivated by Indic Culture and
              Nationalism as construed by our venerable heritage that is time
              immemorial. A strong nation lies in its youth who are empowered
              with the right values, take pride in the country and are able and
              willing to contribute for its growth and development. So Utkrishta
              Bharat as team aims at organising programmes that help in
              promoting nationalistic thinking and cultural ethos amongst the
              youth. It also provides a platform for academic discussions,
              intellectual talks and Seva activities inside and outside the
              campus. "Utkrishta" is Sanskrit word meaning excellence or
              elevated. So as the name suggests Making our nation great by
              achieving excellence in every field is what we thrive for.{" "}
            </p>
          </div>
          <h3 className="text-lg text-center mt-8">Core Team</h3>
          <div className="grid grid-cols-3  justify-items-center">
            <img
              className="bg-[#a71111] hover:scale-110 ease-in-out duration-150 rounded-md p-2 sm:p-4 drop-shadow-2xl h-[300px] "
              src={Shreya}
              alt="Shreya"
            />
            <img
              className="bg-[#a71111] hover:scale-110 ease-in-out duration-150 rounded-md p-2 sm:p-4 drop-shadow-2xl h-[300px] "
              src={Devansh}
              alt="Devansh"
            />
            <img
              className="bg-[#a71111] hover:scale-110 ease-in-out duration-150 rounded-md p-2 sm:p-4 drop-shadow-2xl h-[300px] "
              src={Rahul}
              alt="Rahul"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
