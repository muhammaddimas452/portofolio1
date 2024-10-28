import Nav from "./nav";
import Hero from "./hero";
import Service from "./service";
import Project from "./projek";
import Testimonial from "./testimonial";
import Teams from "./teams";
import Footer from "./footer";

export const main = () => {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Service />
      <Project />
      <Testimonial />
      <Teams />
      <Footer />
    </div>
  );
};

export default main;
