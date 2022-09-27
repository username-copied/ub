import React from "react";
import BGImg from "../assests/BGGoodScale.jpg";
import Typed from "react-typed";
import Navbar from "./Navbar";
import Instagram from "../assests/instagram.png";
import Gmail from "../assests/gmail.png";
import Twitter from "../assests/twitter.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-white relative  ">
        <img className="w-full h-[100vh] " src={BGImg} alt="BGIMG" />
        <div className="absolute top-[8px] right-[100px] font-bold text:2xl md:text-3xl">
          We are <br />"
          <Typed
            className="text-xl md:text-4xl"
            strings={[" ", "Utkrishta Bharath"]}
            typeSpeed={40}
          />
          "
          <br />
          <p className="text-lg sm:text-xl md:text-2xl">
            National Institute of Technology, Surathkal
          </p>
          <br />
          <h1 className="text-lg sm:text-3xl">"Mission" :</h1>
          <p className="text-sm sm:text-lg">
            {" "}
            A strong nation lies in its youth <br /> who are empowered with the
            right values,
            <br /> take pride in the country and are able <br />
            and willing to contribute for its growth and development.
            <br /> So Utkrishta Bharat as team aims at organising
            <br /> programmes that help in promoting nationalistic thinking
            <br /> and cultural ethos amongst the youth.
          </p>
          <br />
          <p className="text-sm sm:text-2xl">
            "The goal" :
            <br />
            to create leaders of the Future,
            <br />
            Leaders for Bharath Mata
          </p>
          <div className="sm:mt-8 mt-2 flex gap-16">
            <a href="https://www.instagram.com/utkrishta.bharath.nitk/">
              <img
                className="bg-[#af662f] drop-shadow-2xl p-2 rounded-md h-[50px] sm:h-[80px] hover:scale-110 ease-in-out duration-150"
                src={Instagram}
                alt="Instagram"
              />
            </a>
            <a href="https://twitter.com/UtkrishtaBNitk">
              <img
                className="bg-[#af662f] drop-shadow-2xl p-2 rounded-md h-[50px] sm:h-[80px] hover:scale-110 ease-in-out duration-150"
                src={Twitter}
                alt="Instagram"
              />
            </a>
            <a href="mailto:utkrishtabharath@nitk.edu.in">
              <img
                className="bg-[#af662f] drop-shadow-2xl p-2 rounded-md h-[50px] sm:h-[80px] hover:scale-110 ease-in-out duration-150"
                src={Gmail}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
