import React from 'react';
import styles from './videoCarousel.module.css';

const VideoCarousel = ({ videos }) => {
  // For simplicity, this example will just display all videos in a list
  return (
    <div className={styles.carousel}>
      {videos.map((video: { url: string; title: string; }, index: React.Key) => (
        <div key={index} className={styles.videoItem}>
          <iframe
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
