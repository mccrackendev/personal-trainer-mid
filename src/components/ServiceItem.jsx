const ServiceItem = ({ service, serviceDesc, servicePrice }) => {
  return (
    <div>
      <h3>{service}</h3>
      <p>{serviceDesc}</p>
      <p>{servicePrice}</p>
    </div>
  );
};

export default ServiceItem;
