const hero = () => {
  return (
    <div className="bg-[#0d0e13] grid justify-items-center lg:py-[150px] lg:px-[100px] ssm:px-7 ssm:py-16">
      <div className="clash-display-semibold lg:text-[120px] text-center md:text-8xl ssm:text-5xl text-white">
        Creatif Studio
      </div>
      <div className="clash-display-regular mt-2 text-center lg:text-[32px] ssm:text-3xl text-white">
        Expertly crafted software solutions
      </div>
      <div className="clash-display-medium mt-6 text-center lg:text-[16px] ssm:text-1xl text-white">
        We specialize in turning your vision into reality. With our team of
        highly skilled professionals, we are committed to delivering customized,
        innovative, and top-quality software solutions that exceed your
        expectations.
      </div>
      <button className="bg-white mt-6 ssm:py-[12px] ssm:px-[16px] md:px-[20px] md:py-[16px] text-sm rounded-[100px] hover:text-white hover:bg-black hover:border-[1px] hover:border-white font-bold font-poppins">
        View Our Word
      </button>
    </div>
  );
};

export default hero;
