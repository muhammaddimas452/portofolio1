import logo from "../assets/img/Frame 1000002500.png";
import facebook from "../assets/img/Facebook.png";
import twitter from "../assets/img/Twitter.png";
import instagram from "../assets/img/Instagram.png";
import linkedin from "../assets/img/LinkedIn.png";
import youtube from "../assets/img/Youtube.png";
import mail from "../assets/img/Mail.png";
import ringing from "../assets/img/Ringing.png";
import location from "../assets/img/Location.png";

const footer = () => {
  return (
    <div className="bg-[#0d0e13] rounded-t-[50px] lg:px-[100px] ssm:px-7">
      <div className="border-b-[1px] border-white lg:py-[72px] ssm:py-10">
        <div className="lg:flex lg:justify-between md:grid-cols-2 gap-y-4 ssm:grid-cols-1 lg:gap-5 ssm:gap-3">
          <div className="grid ssm:justify-items-center text-white md:justify-items-start">
            <h1 className="clash-display-semibold ssm:text-center md:text-start lg:text-[64px] md:text-4xl ssm:text-3xl leading-6">
              Ready To Work With Us?
            </h1>
            <p className="clash-display-light ssm:mt-5 lg:mt-7 ssm:text-center md:text-start lg:text-[16px] ssm:text-sm leading-6">
              Partner with our digital agency for your business with amazing
              results.
            </p>
          </div>
          <div className="ssm:text-center md:text-start ssm:mt-5 lg:mt-0">
            <button className="bg-white text-black ssm:py-[12px] ssm:px-[16px] md:px-[24px] md:py-[16px] text-sm rounded-[100px] font-poppins font-semibold hover:text-white hover:bg-black hover:border-[1px] hover:border-white">
              Lets Talk
            </button>
          </div>
        </div>
      </div>
      <div className="sm:flex ssm:grid ssm:grid-cols-1 sm:text-base justify-between lg:py-[72px] ssm:py-10 text-white">
        <div className="sm:w-96 sm:flex sm:flex-col ssm:grid ssm:justify-items-center ssm:text-center sm:text-start gap-y-7">
          <a href="">
            <img
              className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500"
              src={logo}
              alt=""
            />
          </a>
          <h1>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </h1>
          <div className="flex gap-x-7">
            <a
              className="hover:border-[2px] hover:rounded-full hover:border-white"
              href=""
            >
              <img src={facebook} alt="" />
            </a>
            <a
              className="hover:border-[2px] hover:rounded-full hover:border-white"
              href=""
            >
              <img src={twitter} alt="" />
            </a>
            <a
              className="hover:border-[2px] hover:rounded-full hover:border-white"
              href=""
            >
              <img src={instagram} alt="" />
            </a>
            <a
              className="hover:border-[2px] hover:rounded-full hover:border-white"
              href=""
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              className="hover:border-[2px] hover:rounded-full hover:border-white"
              href=""
            >
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:text-base ssm:text-sm sm:justify-items-end ssm:justify-items-center ssm:mt-4 lg:gap-x-20 md:gap-x-8 ssm:gap-x-1">
          <div className="flex flex-col ssm:gap-y-3 sm:gap-y-4">
            <h1>Other Pages</h1>
            <ul className="flex flex-col ssm:gap-y-3 sm:gap-y-4">
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Home</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Portofolios</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Services</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ssm:gap-y-3 sm:gap-y-4">
            <h1>Company</h1>
            <ul className="flex flex-col ssm:gap-y-3 sm:gap-y-4">
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Terms Condition</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Privacy Policy</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Cookies</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ssm:gap-y-3 sm:gap-y-4">
            <h1>Contact</h1>
            <ul className="flex flex-col ssm:gap-y-3 sm:gap-y-4">
              <li className="flex items-center transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <img
                  src={mail}
                  className="lg:w-6 lg:h-6 md:w-5 md:h-5"
                  alt=""
                />
                <a href="">hi@creatif.studio</a>
              </li>
              <li className="flex items-center transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <img
                  src={ringing}
                  className="lg:w-6 lg:h-6 md:w-5 md:h-5"
                  alt=""
                />
                <a href="">(+021) 1580 3658</a>
              </li>
              <li className="flex items-center transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <img
                  src={location}
                  className="lg:w-6 lg:h-6 md:w-5 md:h-5"
                  alt=""
                />
                <a href="">Jawa Barat, Indonesia</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
