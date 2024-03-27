import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './videoCarousel.module.css'; // Make sure you create a corresponding CSS module file

interface VideoItem {
  title: string;
  url: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Centers the current slide
    responsive: [{
      breakpoint: 768, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }]
  };

  const handleVideoClick = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <div className={styles.videoCarouselContainer}>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoSlide} onClick={() => handleVideoClick(video.url)}>
              <h3>{video.title}</h3>
              <iframe
                className={styles.videoThumbnail}
                width="560"
                height="315"
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
      {activeVideo && (
        <div className={styles.videoModal}>
          <div className={styles.videoWrapper}>
            <button className={styles.closeButton} onClick={closeVideo}>
              X
            </button>
            <iframe
              width="100%"
              height="100%"
              src={activeVideo}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCarousel;
