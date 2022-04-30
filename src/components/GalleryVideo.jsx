const GalleryVideo = ({ videoSrc, videoType }) => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={videoSrc} type={videoType} />
        Your Browser does not support the video tag
      </video>
    </div>
  );
};

export default GalleryVideo;
