import React from "react";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <section className="pb-[20px] pt-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex">
          <div className="w-[40%]">
            <img src={logo} alt="" />
            <p className="w-[370px] pt-[44px]">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <div className="w-[20%]">
            <h4 className="pb-[48px] text-[24px] font-semibold">Features</h4>
            <ul className="flex flex-col gap-[30px]">
              <li>Home</li>
              <li>About</li>
              <li>Benifit</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-[20%]">
            <h4 className="pb-[48px] text-[24px] font-semibold">Products</h4>
            <ul className="flex flex-col gap-[30px]">
              <li>Task Management</li>
              <li>Company growth</li>
              <li>Time tracking</li>
            </ul>
          </div>
          <div className="w-[20%]">
            <h4 className="pb-[48px] text-[24px] font-semibold">Support</h4>
            <ul className="flex flex-col gap-[30px]">
              <li>Customer service</li>
              <li>Accessibility</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div>
            <div className="flex justify-between pt-[80px]">
                <p>@20201 Innovate.All rights reserved.</p>
                <div className="flex gap-5">
                    <p>Privacy policy</p>
                    <p>Terms & condition</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
