import Petik from "../assets/img/petik.png";
// import RArrow from "../assets/img/r-arrow.png";
// import LArrow from "../assets/img/l-arrow.png";
import Ellips1 from "../assets/img/Ellipse 1.png";
import Ellips2 from "../assets/img/Ellipse 2.png";
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
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
          What Our Clients Say
        </h1>
        <div className="flex sm:mt-12">
          <img
            className="absolute lg:block lg:left-[20%] ssm:hidden"
            src={Petik}
            alt=""
          />
          <span className="font-poppins font-light mt-6 text-center lg:px-[25%] lg:text-[16px] ssm:text-sm">
            We are very happy to work with Creatif Studio. Their service was
            very professional, and they always maintained good communication
            throughout the project. The end result far exceeded our
            expectations, and we are very satisfied with the quality of their
            work
          </span>
        </div>
      </div>
      <div className="sm:t-16 ssm:mt-10">
        <Slider {...settings} className="">
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
          <div className="group/item transition ease-in-out delay-100 hover:-translate-y-2 duration-500 grayscale hover:grayscale-0">
            <div className="relative">
              <img src={Ellips1} alt="" />
              <img
                className="absolute ssm:top-[73px] ssm:left-[78px] sm:top-[78px] sm:left-[83px]"
                src={Ellips2}
                alt=""
              />
            </div>
            <div className="text-center mt-6">
              <h1>Vicky Hardia</h1>
              <span className="group/edit invisible group-hover/item:visible">
                Sinarjaya
              </span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default testimonial;
