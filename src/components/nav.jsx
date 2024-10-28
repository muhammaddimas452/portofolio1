/* eslint-disable react-hooks/rules-of-hooks */
import logo from "../assets/img/Frame 1000002500.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const nav = () => {
  const [nav, setNav] = useState(false);

  function openMenu() {
    setNav(true);
  }
  function closeMenu() {
    setNav(false);
  }
  return (
    <div className="top-0 z-50">
      <div className="bg-[#0d0e13] flex items-center justify-between ssm:px-7 lg:px-[100px] ssm:py-6 sm:py-8 md:py-[36px] ">
        <div className="ssm:w-[187px] lg:w-[217px] h-[40px]">
          <a href="">
            <img
              className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500 w-full h-full object-contain"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="ssm:hidden lg:flex">
          <div className="flex gap-x-7 ">
            <a
              className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black"
              href=""
            >
              Home
            </a>
            <a
              className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black"
              href=""
            >
              Service
            </a>
            <a
              className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black"
              href=""
            >
              Portofolios
            </a>
            <a
              className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black"
              href=""
            >
              Testimonials
            </a>
            <a
              className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black"
              href=""
            >
              Teams
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-white  px-[20px] py-[16px] text-sm rounded-[100px] ssm:rounded-[50px] ssm:text-ssm ssm:px-[10px] ssm:py-[12px] font-bold font-poppins hover:text-white hover:bg-black hover:border-[1px] hover:border-white">
            Contact Us
          </button>
          <div className="ssm:block lg:hidden">
            {nav ? (
              <IoClose
                onClick={closeMenu}
                className="text-white cursor-pointer text-4xl ssm:ml-1 sm:ml-4"
              />
            ) : (
              <IoMenu
                onClick={openMenu}
                className="text-white text-4xl lg-hidden block ssm:ml-1 sm:ml-4"
              />
            )}
          </div>
        </div>
        {nav ? (
          <div className="flex flex-col gap-4 pt-5 px-5 absolute delay-100 top-[12%] right-0 w-full bg-black">
            <div className="flex gap-y-4 flex-col">
              <a
                className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black border-b"
                href=""
              >
                Home
              </a>
              <a
                className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black border-b"
                href=""
              >
                Service
              </a>
              <a
                className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black border-b"
                href=""
              >
                Portofolios
              </a>
              <a
                className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black border-b"
                href=""
              >
                Testimonials
              </a>
              <a
                className="text-white text-sm md:text-md font-poppins text-transform: uppercase hover:bg-white rounded-xl px-1 py-1 hover:text-black border-b"
                href=""
              >
                Teams
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default nav;
