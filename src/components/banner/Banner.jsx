import React from "react";
import Card from "../../assets/Cards.png";

const Banner = () => {
  return (
    <section className="bg-linear-to-br from-[#8551ff3c] via-[#b19f633d] to-[#E2E2E9]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap ">
          <div className="pt-[280px] w-[55%]">
            <h1 className="text-[64px] font-bold w-[670px] pb-[40px]">
              Professional task manager tool to grow{" "}
            </h1>
            <p className="text-[18px] font-normal w-[500px]  border-l-5 border-[#FFC556] pl-[20px] py-[4px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime.
            </p>
            <div className="flex justify-between mt-[48px] items-center bg-[#8454f52c] rounded-2xl  pr-[15px] py-[15px] w-[630px]">
              <input
                type="email"
                placeholder="Enter your Gmail address"
                className="flex-1 mr-4 px-4 py-3 rounded-xl text-black focus:outline-none "
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-[48px] py-[20px] rounded-xl transition transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>

          <div className="pt-[220px] w-[45%] pb-[90px] ">
            <div className="flex justify-end">
              <img src={Card} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
