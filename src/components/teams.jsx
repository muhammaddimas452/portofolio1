import team1 from "../assets/img/team1.png";
import team2 from "../assets/img/team2.png";
import team3 from "../assets/img/team3.png";
import team4 from "../assets/img/team4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teams = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="bg-white pt-6 ssm:pb-9 md:pb-[72px] lg:px-[100px] ssm:px-9">
      <div className="grid justify-items-center text-center">
        <h1 className="clash-display-semibold lg:text-[42px]  md:text-4xl ssm:text-3xl">
          Our Best Team
        </h1>
      </div>
      <div className="py-12">
        <Slider {...settings} className="">
          <div className="cursor-pointer items-center justify-center overflow-hidden">
            <div className="transform transition duration-500 hover:scale-90">
              <img
                className="h-full w-[100%] object-cover"
                src={team1}
                alt=""
              />
            </div>
            <div className="text-center py-4">
              <h1 className="font-poppins font-bold ssm:text-2xl lg:text-3xl">
                Wad Warren
              </h1>
              <p className="font-poppins mb-3 lg:text-base">Web Designer</p>
            </div>
          </div>
          <div className="cursor-pointer items-center justify-center overflow-hidden">
            <div className="transform transition duration-500 hover:scale-90">
              <img
                className="h-full w-[100%] object-cover"
                src={team2}
                alt=""
              />
            </div>
            <div className="text-center py-4">
              <h1 className="font-poppins font-bold ssm:text-2xl lg:text-3xl">
                Jacob Jones
              </h1>
              <p className="font-poppins mb-3 lg:text-base">App Developer</p>
            </div>
          </div>
          <div className="cursor-pointer items-center justify-center overflow-hidden">
            <div className="transform transition duration-500 hover:scale-90">
              <img
                className="h-full w-[100%] object-cover"
                src={team3}
                alt=""
              />
            </div>
            <div className="text-center py-4">
              <h1 className="font-poppins font-bold ssm:text-2xl lg:text-3xl">
                Dianner Russel
              </h1>
              <p className="font-poppins mb-3 lg:text-base">Web Developer</p>
            </div>
          </div>
          <div className="cursor-pointer items-center justify-center overflow-hidden">
            <div className="transform transition duration-500 hover:scale-90">
              <img
                className="h-full w-[100%] object-cover"
                src={team4}
                alt=""
              />
            </div>
            <div className="text-center py-4">
              <h1 className="font-poppins font-bold ssm:text-2xl lg:text-3xl ">
                Floyd Miles
              </h1>
              <p className="font-poppins mb-3  lg:text-base">Cloud Arc</p>
            </div>
          </div>
          <div className="cursor-pointer items-center justify-center overflow-hidden">
            <div>
              <img
                className="h-full w-[100%] object-cover"
                src={team4}
                alt=""
              />
            </div>
            <div className="text-center py-4">
              <h1 className="font-poppins font-bold ssm:text-2xl lg:text-3xl ">
                Floyd Miles
              </h1>
              <p className="font-poppins mb-3  lg:text-base">Cloud Arc</p>
            </div>
          </div>
          <div className="cursor-pointer items-center justify-center overflow-hidden">
            <div>
              <img
                className="h-full w-[100%] object-cover"
                src={team3}
                alt=""
              />
            </div>
            <div className="text-center py-4">
              <h1 className="font-poppins font-bold ssm:text-2xl lg:text-3xl">
                Dianner Russel
              </h1>
              <p className="font-poppins mb-3 lg:text-base">Web Developer</p>
            </div>
          </div>
          <div className="cursor-pointer items-center justify-center overflow-hidden">
            <div>
              <img
                className="h-full w-[100%] object-cover"
                src={team2}
                alt=""
              />
            </div>
            <div className="text-center py-4">
              <h1 className="font-poppins font-bold ssm:text-2xl lg:text-3xl">
                Jacob Jones
              </h1>
              <p className="font-poppins mb-3 lg:text-base">App Developer</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default teams;
