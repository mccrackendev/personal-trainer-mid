import GalleryImage from "../components/GalleryImage";
import GalleryVideo from "../components/GalleryVideo";
import { galleryContent } from "../data/dummyData";
import styles from "./Gallery.module.css";
import { Instagram } from "react-bootstrap-icons";

const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <h2>Gallery</h2>
      <a href="/" className={styles.galleryInstagramLink}>
        <Instagram /> Follow us on instagram
      </a>
      <div className={styles.gallerySectionGridWrapper}>
        {galleryContent.map((content) => {
          if (content.type === "image") {
            return (
              <GalleryImage
                key={Math.random()}
                imageSrc={content.imageSrc}
                imageAlt={content.imageAlt}
                imageLegend={content.imageLegend}
              />
            );
          } else if (content.type === "video") {
            return (
              <GalleryVideo
                key={Math.random()}
                videoSrc={content.videoSrc}
                videoType={content.videoType}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default Gallery;
