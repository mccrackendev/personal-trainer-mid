import Testimonial from "./Testimonial";
import styles from './Testimonials.module.css';

const Testimonials = ({ testimonialsData }) => {
  return (
    <section className={styles.testimonialsSection}>
    <h2 className={styles.sectionTitle}>What People are Saying</h2>
    <br />
      <div className={styles.testimonialsGridWrapper}>
        {testimonialsData.map((testimonial) => (
          <Testimonial
            key={Math.random()}
            testimonialImage={testimonial.testimonialImage}
            testimonialName={testimonial.testimonialName}
            testimonialBlockquote={testimonial.testimonialBlockquote}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
