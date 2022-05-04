import styles from './GalleryImage.module.css';

const GalleryImage = ({ imageSrc, imageAlt, imageLegend }) => {
  return (
    <div className={styles.galleryImageWrapper}>
      <img src={imageSrc} alt={imageAlt} width={320}/>
      <legend>{imageLegend}</legend>
    </div>
  );
};

export default GalleryImage;
