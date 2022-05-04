import styles from './GalleryVideo.module.css';

const GalleryVideo = ({ videoSrc, videoType }) => {
  return (
    <div className={styles.galleryVideoWrapper}>
      <video width="1920" height="1080" controls>
        <source src={videoSrc} type={videoType} />
        Your Browser does not support the video tag
      </video>
    </div>
  );
};

export default GalleryVideo;
