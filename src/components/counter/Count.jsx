import React from "react";
import counteimg from "../../assets/countimg.png";

const Count = () => {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-[20px] items-center">
            <img className="w-[140px]" src={counteimg} alt="" />
            <span className="text-[24px]">Watch a demo</span>
          </div>

          <div className="flex gap-[88px]">
            <div className="pr-[88px] relative after:absolute after:top-10 after:right-0 after:h-[80px] after:bg-black after:w-[1px]">
              <h3 className="text-[64px]">2.8x</h3>
              <p>We are ultra faste <br /> deal service</p>
            </div>
            <div className="pr-[88px] relative after:absolute after:top-10 after:right-0 after:h-[80px] after:bg-black after:w-[1px] ">
              <h3 className="text-[64px]">68%</h3>
              <p>More deal closed <br /> services</p>
            </div>
            <div>
              <h3 className="text-[64px]">2.4x</h3>
              <p>We slove issue ultra <br /> faster</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
