# Initial Setup

import VideoCarousel from '../../../../src/components/carouselFeatures/videoCarousel';

<div className="video-carousel-wrapper">
  <VideoCarousel
    videos={[
      {
        title: 'Video Title 1',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1'
      },
      {
        title: 'Video Title 2',
        url: 'https://www.youtube.com/embed/VIDEO_ID_2'
      },
      // ... more videos
    ]}
  />
</div>
