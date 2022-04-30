import GalleryImage from "../components/GalleryImage";
import GalleryVideo from "../components/GalleryVideo";
import { galleryContent } from "../data/dummyData";

const Gallery = () => {
  return (
    <div>
      <h2>Gallery</h2>
      <a href="/">Follow us on instagram</a>
      <section>
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
      </section>
    </div>
  );
};

export default Gallery;
