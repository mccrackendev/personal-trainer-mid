import styles from "./ServiceItem.module.css";

const ServiceItem = ({ service, serviceDesc, servicePrice }) => {
  return (
    <div className={styles.serviceItem}>
      <h3>{service}</h3>
      <p>{serviceDesc}</p>
      <p>{servicePrice}</p>
    </div>
  );
};

export default ServiceItem;
