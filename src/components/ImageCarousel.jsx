import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assests/alora-griffiths-7-ruqVJbHAo-unsplash.jpg";
import image2 from "../assests/alora-griffiths-E_y9X4kNzxs-unsplash.jpg";
import image3 from "../assests/sam-sabourin-KZrwKV90zRk-unsplash.jpg";

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showArrows="true"
      interval={5000}
    >
      <div>
        <img src={image1} alt="food"></img>
        <legend>
          Photo by{" "}
          <a href="https://unsplash.com/@aloragriffiths?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Alora Griffiths
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/weightlifting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </legend>
      </div>
      <div>
        <img src={image2} alt="food" loading="lazy"></img>
        <legend>
          Photo by{" "}
          <a href="https://unsplash.com/@aloragriffiths?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Alora Griffiths
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/weightlifting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </legend>
      </div>
      <div>
        <img src={image3} alt="food" loading="lazy"></img>
        <legend>
          Photo by{" "}
          <a href="https://unsplash.com/@samsabourin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Sam Sabourin
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/weightlifting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </legend>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
