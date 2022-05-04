import ServiceItem from "./ServiceItem";
import styles from "./Services.module.css";

const Services = ({ serviceData }) => {
  return (
    <section className={styles.servicesSection}>
      <h2>Services</h2>
      <div className={styles.servicesGridWrapper}>
        {serviceData.map((service) => (
          <ServiceItem key={Math.random()} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
