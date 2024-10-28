import projek1 from "../assets/img/projek1.png";
import projek2 from "../assets/img/projek2.png";
import projek3 from "../assets/img/projek3.png";
import projek4 from "../assets/img/projek4.png";

const projek = () => {
  return (
    <div className="bg-white lg:py-[64px] lg:px-[100px] ssm:px-7 ssm:pb-9">
      <div>
        <div className="lg:flex lg:justify-between ssm:grid-cols-1 lg:gap-40 ssm:gap-3">
          <h1 className="clash-display-semibold ssm:text-center md:text-start lg:text-[42px] md:text-4xl ssm:text-3xl">
            Awesome Project We`ve Ever Worked On
          </h1>
          <div className="grid ssm:justify-items-center md:justify-items-start">
            <p className="clash-display-regular ssm:text-center md:text-start lg:text-[16px] ssm:text-sm leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-black text-white mt-6 ssm:py-[12px] ssm:px-[16px] md:px-[32px] md:py-[16px] text-sm rounded-[100px] font-poppins hover:bg-white hover:text-black hover:border-[1px] hover:border-black">
              See All Project
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 ssm:gap-y-10 gap-x-4 py-12 justify-items-center">
          <div className="group relative cursor-pointer items-center hover:rounded-[25px] justify-center overflow-hidden transition-shadow hover:shadow-black/30">
            <div>
              <img
                className="h-full w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={projek1}
                alt=""
              />
            </div>
            <div className="absolute rounded-[25px] inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/40"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="clash-display-semibold text-3xl text-white opacity-0 group-hover:opacity-100">
                Web Design
              </h1>
              <p className="clash-display-light mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center hover:rounded-[25px] justify-center overflow-hidden transition-shadow hover:shadow-black/30">
            <div>
              <img
                className="h-full w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={projek2}
                alt=""
              />
            </div>
            <div className="absolute rounded-[25px] inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/40"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="clash-display-semibold text-3xl text-white opacity-0 group-hover:opacity-100">
                Web Design
              </h1>
              <p className="clash-display-light mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center hover:rounded-[25px] justify-center overflow-hidden transition-shadow hover:shadow-black/30">
            <div>
              <img
                className="h-full w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={projek3}
                alt=""
              />
            </div>
            <div className="absolute rounded-[25px] inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/40"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="clash-display-semibold text-3xl text-white opacity-0 group-hover:opacity-100">
                Web Design
              </h1>
              <p className="clash-display-light mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center hover:rounded-[25px] justify-center overflow-hidden transition-shadow hover:shadow-black/30">
            <div>
              <img
                className="h-full w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={projek4}
                alt=""
              />
            </div>
            <div className="absolute rounded-[25px] inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/40"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="clash-display-semibold text-3xl text-white opacity-0 group-hover:opacity-100">
                Web Design
              </h1>
              <p className="clash-display-light mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projek;
