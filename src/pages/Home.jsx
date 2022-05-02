import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { serviceData } from "../data/dummyData";
import { testimonialsData } from "../data/dummyData";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.homeSection}>
      <Hero />
      <Services serviceData={serviceData} />
      <Testimonials testimonialsData={testimonialsData} />
    </section>
  );
};

export default Home;
