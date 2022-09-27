import React from "react";
import Kalari from "../assests/Kalri.jpg";
import KEP from "../assests/KEPCombined.png";
import Aashraya from "../assests/Aashraya.jpg";
import Navbar from "./Navbar";
import Rangoli from "../assests/Rangoli1.png";
import YuvaJagruti from "../assests/YuvaJagruti.jpg";

const Initiatives = () => {
  return (
    <>
      <Navbar />
      <div className="text-white relative  ">
        <img className="w-full  h-[100vh] " src={Rangoli} alt="BGIMG" />
        <div className="absolute top-[12px] left-[10px] sm:left-[50px] font-bold text:xl md:text-2xl ">
          <p>"Our Initiatives" :</p>
          <br />
          <div className="grid grid-cols-2 justify-around gap-16 text-center">
            <div className="bg-[#e6774f] p-2 hover:scale-110 ease-in-out duration-150  rounded-md drop-shadow-2xl">
              <h3>KEP</h3> <br />
              <img className="mx-auto h-[200px]" src={KEP} alt="KEP" />
              <br />
            </div>{" "}
            <div className="bg-[#e6774f] p-2 hover:scale-110 ease-in-out duration-150 rounded-md drop-shadow-2xl">
              <h3> Donation Drive </h3> <br />
              <img
                className="mx-auto h-[200px]"
                src={Aashraya}
                alt="Donation"
              />
            </div>
            <div className="bg-[#e6774f] p-2 hover:scale-110 ease-in-out duration-150 rounded-md drop-shadow-2xl">
              <h3>Yuva Jagruti Quiz</h3> <br />
              <img
                className="mx-auto h-[200px]"
                src={YuvaJagruti}
                alt="Yuva Jagruti"
              />
            </div>
            <div className="bg-[#e6774f] p-2 hover:scale-110 ease-in-out duration-150 rounded-md drop-shadow-2xl">
              <h3>Kalaripayattu Event </h3> <br />
              <img
                className=" mx-auto h-[200px] w-[200px]"
                src={Kalari}
                alt="Kalari"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Initiatives;
