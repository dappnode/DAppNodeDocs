import React, { useEffect, useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

const crashCourseVideos: {
  title: string;
  url: string;
  featured: boolean;
}[] = [
  {
    title: "Booting from the Dappnode ISO",
    url: "https://www.youtube.com/embed/lh5hADm1Iuk",
    featured: true,
  },
  {
    title: "Accessing the Dappnode User Interface or Dashboard",
    url: "https://www.youtube.com/embed/Z1uDv_J7wlg",
    featured: true,
  },
  {
    title: "Setting up Dappnode Security",
    url: "https://www.youtube.com/embed/TZUK39yiZ30",
    featured: true,
  },
  {
    title: "Configuring your Dappnode VPN",
    url: "https://www.youtube.com/embed/qB0sMaNpXpU",
    featured: true,
  },
  {
    title: "Syncing your clients/An overview on node running",
    url: "https://www.youtube.com/embed/zJowD3X-MUc",
    featured: true,
  },
  {
    title: "Understanding your Dappnode's Hardware",
    url: "https://www.youtube.com/embed/1GW-GbGKs7o?si=DZVO185qWNWiXFl4",
    featured: true,
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleVideoClick = (video) => {
    setActiveVideo(video.url);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx("carousel", styles.carousel)}>
          {crashCourseVideos
            .filter((video) => video.featured)
            .map((video, index) => (
              <div
                key={index}
                className={clsx("carousel__item", styles.carouselItem)}
                onClick={() => handleVideoClick(video)}
              >
                <iframe
                  className={styles.videoThumbnail}
                  width="560"
                  height="315"
                  src={video.url}
                  allowFullScreen
                ></iframe>
                <div className={styles.videoOverlay}></div>
              </div>
            ))}
        </div>
        {activeVideo && (
          <div className={styles.videoModal}>
            <div className={styles.videoWrapper}>
              <button className={styles.closeButton} onClick={closeVideo}>
                X
              </button>
              <iframe
                width="100%" // Full width of its parent
                height="100%" // Full height of its parent
                src={activeVideo}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
