const Testimonial = ({
  testimonialImage,
  testimonialName,
  testimonialBlockquote,
}) => {
  return (
    <div>
      <img src={testimonialImage} alt={testimonialName}></img>
      <h3>{testimonialName}</h3>
      <blockquote>{testimonialBlockquote}</blockquote>
    </div>
  );
};

export default Testimonial;
