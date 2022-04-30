import Testimonial from "./Testimonial";

const Testimonials = ({ testimonialsData }) => {
  return (
    <section>
      {testimonialsData.map((testimonial) => (
        <Testimonial
          key={Math.random()}
          testimonialImage={testimonial.testimonialImage}
          testimonialName={testimonial.testimonialName}
          testimonialBlockquote={testimonial.testimonialBlockquote}
        />
      ))}
    </section>
  );
};

export default Testimonials;
