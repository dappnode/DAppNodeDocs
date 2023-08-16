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
    title: "How to set up dappnode from scratch using your own hardware",
    url: "https://www.youtube.com/embed/VBUIIV8Jo_U",
    featured: true,
  },
  {
    title: "How to set up a validator",
    url: "https://www.youtube.com/embed/Bc6FomfhkbI",
    featured: true,
  },
  {
    title: "How to setup Stakehouse node operator",
    url: "https://www.youtube.com/embed/tQwy096M8L8",
    featured: true,
  },
  {
    title: "How to withdraw your staked ETH",
    url: "https://www.youtube.com/embed/1uxOIcR92uQ",
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
