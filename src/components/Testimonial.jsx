import styles from "./Testimonial.module.css";
import { Quote } from "react-bootstrap-icons";

const Testimonial = ({
  testimonialImage,
  testimonialName,
  testimonialBlockquote,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialImgWrapper}>
        <img src={testimonialImage} alt={testimonialName}></img>
      </div>
      <div>
        <blockquote>
          <Quote /> {testimonialBlockquote} <Quote />
        </blockquote>
        <h3>{testimonialName}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
