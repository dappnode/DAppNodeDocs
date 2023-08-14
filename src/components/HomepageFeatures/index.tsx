import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useHistory } from "@docusaurus/router";

type FeatureItem = {
  title: string;
  Image: string | React.ComponentType<React.ComponentProps<"svg">>; // Changed Svg to Image, adjusted type
  description: JSX.Element;
  url?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Getting started",
    Image: require("@site/static/img/getting-started.png").default,
    description: (
      <>
        Kickstart your blockchain journey with Dappnode. Our straightforward
        setup guides you to deploy and manage your decentralized applications
        easily. No more technical jargon, just a seamless blockchain experience.
        With Dappnode, diving into decentralization has never been simpler.
        Start now!
      </>
    ),
    url: "/docs/user/getting-started/choose-your-path",
  },
  {
    title: "Solo staking",
    Image: require("@site/static/img/solo-staking-ethereum.png").default,
    description: (
      <>
        Experience the future of Ethereum with Dappnode. Simplify your solo
        staking journey with our user-friendly platform, empowering you to run
        your own Ethereum 2.0 validator node with ease and security. With
        Dappnode, you're in control. Stake smarter, stake with Dappnode.
      </>
    ),
    url: "/docs/user/staking/introduction",
  },
  {
    title: "Stakehouse",
    Image: require("@site/static/img/stakehouse-logo.png").default,
    description: (
      <>
        Boost your staking game with Dappnode's Stakehouse! Stakehouse
        streamlines the process, making it effortless to stake your Ethereum
        directly from home. With a user-friendly interface and robust support,
        Stakehouse offers an unrivaled staking experience, making you a part of
        the network's security. Stake smart, choose Stakehouse!
      </>
    ),
    url: "/docs/user/packages/stakehouse",
  },
  {
    title: "Rocketpool",
    Image: require("@site/static/img/rocketpool.png").default,
    description: (
      <>
        How Rocket Pool Works. Unlike solo stakers, who are required to put 32
        ETH up for deposit to create a new validator, Rocket Pool nodes only
        need to deposit 8/16 ETH per validator. This will be coupled with 16 ETH
        from the staking pool (which stakers deposited in exchange for rETH) to
        create a new Ethereum validator. This new validator is called a
        minipool.
      </>
    ),
    url: "/docs/user/packages/rocketpool",
  },
  {
    title: "Ethical metrics",
    Image: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Ethical metrics is privacy-ensured solution for monitoring your
        Dappnode. This service alerts you about your Dappnode's status, using
        Tor hidden services to maintain the privacy of your IP address. Setting
        up is straightforward, requiring only an email address to receive
        alerts. In forthcoming updates, look forward to more types of alerts.
        Ethical Monitor is a genuine reflection of Dappnode's commitment to
        delivering services that value user's privacy and provide control over
        your staking experience.
      </>
    ),
    url: "/docs/user/ethical-metrics/introduction",
  },
  {
    title: "Smoothing pool",
    Image: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    url: "/docs/smooth/introduction",
  },
];

function Feature({ title, Image, description, url }: FeatureItem) {
  const isSvg = typeof Image !== "string";
  const history = useHistory(); //initialize useHistory hook

  const handleClick = () => {
    if (url) {
      history.push(url); //use history.push to navigate to the url
    }
  };

  return (
    <div
      className={clsx("col col--4")}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="text--center">
        {isSvg ? (
          <Image className={styles.featureSvg} role="img" />
        ) : (
          <img
            src={Image as string}
            className={styles.featureSvg}
            alt={title}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
