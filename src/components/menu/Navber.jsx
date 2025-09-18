import React from "react";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import { FaChartBar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navber = () => {
  let [show, setShow] = useState(false);

  let handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="absolute top-10 w-full">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <img src={Logo} alt="" />
          </div>
          <div
            className={`lg:static duration-300  ${
              show
                ? "absolute w-full bg-gray-400 top-16 left-0"
                : " absolute  top-16 left-[-100%] "
            }`}
          >
            <ul className="lg:flex py-5 lg:py-0 lg:flex-row flex flex-col gap-4  lg:gap-12 items-center ">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Protfolio</li>
              <li>Price</li>
              <li>Blog</li>
              <button className="py-3 px-4 block lg:hidden rounded-[7px] bg-purple-400">
                Contact
              </button>
            </ul>
          </div>
          <div>
            <button className="hidden lg:block bg-purple-500 hover:bg-purple-600 text-white font-medium px-[48px] py-[20px] rounded-xl transition transform hover:scale-105">
              Contact Us
            </button>

            <div className="lg:hidden text-[30px]" onClick={handleShow}>
              {show ? <ImCross /> : <FaChartBar />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
