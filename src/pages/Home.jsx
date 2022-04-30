import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { serviceData } from "../data/dummyData";
import { testimonialsData } from "../data/dummyData";

const Home = () => {
  return (
    <section>
      <Hero />
      <Services serviceData={serviceData} />
      <Testimonials testimonialsData={testimonialsData} />
    </section>
  );
};

export default Home;
