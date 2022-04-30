import ServiceItem from "./ServiceItem";

const Services = ({ serviceData }) => {
  return (
    <section>
      {serviceData.map((service) => (
        <ServiceItem key={Math.random()} {...service} />
      ))}
    </section>
  );
};

export default Services;
