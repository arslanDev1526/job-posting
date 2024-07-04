import Navbar from "./navbar";
import Hero from "./hero";
import InfiniteSlider from "./infinteslider";
import FeaturedJobs from "./featuredjobs";
import Location from "./location";
import Faqs from "./faqs";
import Testimonials from "./testimonials";
import Contact from "./contact";
import SolarSystem from "./solarsystem";


const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteSlider />
      <FeaturedJobs />
      <SolarSystem/>
      <Location />
      <Faqs />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Landing;
