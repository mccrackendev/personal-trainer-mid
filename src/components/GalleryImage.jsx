const GalleryImage = ({ imageSrc, imageAlt, imageLegend }) => {
  return (
    <div>
      <img src={imageSrc} alt={imageAlt} />
      <legend>{imageLegend}</legend>
    </div>
  );
};

export default GalleryImage;
