/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userSidebar: [
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "doc",
          label: "Choose your path",
          id: "user/getting-started/choose-your-path",
        },
        {
          type: "doc",
          label: "Connect your Dappnode to the router",
          id: "user/getting-started/connect-dappnode-to-the-router",
        },
        {
          type: "doc",
          label: "Access your Dappnode via WiFi",
          id: "user/getting-started/access-dappnode-via-wifi",
        },
        {
          type: "doc",
          label: "Register",
          id: "user/getting-started/register",
        },
        {
          type: "doc",
          label: "Setup",
          id: "user/getting-started/setup",
        },
        {
          type: "doc",
          label: "Next steps",
          id: "user/getting-started/next-steps",
        },
      ],
    },
    {
      type: "category",
      label: "Access your dappnode",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/access-your-dappnode/overview",
        },
        {
          type: "doc",
          label: "Wi-Fi",
          id: "user/access-your-dappnode/wifi",
        },
        {
          type: "category",
          label: "VPN",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "user/access-your-dappnode/vpn/overview",
            },
            {
              type: "doc",
              label: "OpenVPN",
              id: "user/access-your-dappnode/vpn/openvpn",
            },
            {
              type: "doc",
              label: "Wireguard",
              id: "user/access-your-dappnode/vpn/wireguard",
            },
          ],
        },
        {
          type: "doc",
          label: "Terminal (Advanced)",
          id: "user/access-your-dappnode/terminal",
        },
        {
          type: "doc",
          label: "Local Proxy (Recovery)",
          id: "user/access-your-dappnode/local",
        },
      ],
    },
    {
      type: "category",
      label: "Staking",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/staking/overview",
        },
        {
          type: "category",
          label: "LSD Pools",
          items: [
            {
              type: "doc",
              label: "Rocketpool",
              id: "user/staking/lsd-pools/rocketpool",
            },
            {
              type: "doc",
              label: "Stakewise",
              id: "user/staking/lsd-pools/stakewise",
            },
            {
              type: "doc",
              label: "Stakehouse",
              id: "user/staking/lsd-pools/stakehouse",
            }
          ],
        },
        {
          type: "category",
          label: "DVT Technologies",
          items: [
            {
              type: "doc",
              label: "Obol",
              id: "user/staking/dvt-technologies/obol-network",
            },
          ],
        },
        {
          type: "category",
          label: "Solo",
          items: [
            {
              type: "doc",
              label: "Ethereum mainnet",
              id: "user/staking/solo/ethereum",
            },
            {
              type: "doc",
              label: "Ethereum testnet",
              id: "user/staking/solo/goerli-prater",
            },
            {
              type: "doc",
              label: "Gnosis Chain",
              id: "user/staking/solo/gnosis-chain",
            },
            {
              type: "doc",
              label: "LUKSO",
              id: "user/staking/solo/lukso",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Packages",
      items: [
        {
          type: "doc",
          label: "DMS",
          id: "user/packages/dms",
        },
        {
          type: "doc",
          label: "ethical-metrics",
          id: "user/packages/ethical-metrics",
        },
        {
          type: "doc",
          label: "rocketpool",
          id: "user/packages/rocketpool",
        },
      ],
    },
    {
      type: "category",
      label: "Repository",
      items: [
        {
          type: "doc",
          label: "Ethereum",
          id: "user/repository/ethereum",
        },
        {
          type: "doc",
          label: "IPFS",
          id: "user/repository/ipfs",
        },
      ],
    },
    {
      type: "category",
      label: "Install",
      items: [
        {
          type: "doc",
          label: "ISO",
          id: "user/install/iso",
        },
        {
          type: "doc",
          label: "Script",
          id: "user/install/script",
        },
        {
          type: "doc",
          label: "ARM",
          id: "user/install/arm",
        },
        {
          type: "doc",
          label: "Dappnode commands",
          id: "user/install/dappnode-commands",
        },
      ],
    },
    {
      type: "category",
      label: "Ethical metrics",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/ethical-metrics/overview",
        },
        {
          type: "doc",
          label: "Notifications",
          id: "user/ethical-metrics/notifications",
        },
      ],
    },
    {
      type: "category",
      label: "Videos and tutorials",
      items: [
        {
          type: "autogenerated",
          dirName: "user/videos-and-tutorials",
        },
      ],
    },
    {
      type: "category",
      label: "FAQs",
      items: [
        {
          type: "autogenerated",
          dirName: "user/faqs",
        },
      ],
    },
  ],
  devSidebar: [
    "dev",
    {
      type: "doc",
      label: "Command line",
      id: "dev/cli",
    },
    {
      type: "doc",
      label: "Build",
      id: "dev/build",
    },
    {
      type: "doc",
      label: "Publish",
      id: "dev/publish",
    },
    {
      type: "category",
      label: "File references",
      items: [
        {
          type: "doc",
          label: "Docker Compose",
          id: "dev/references/docker-compose",
        },
        {
          type: "doc",
          label: "Dappnode Manifest",
          id: "dev/references/manifest",
        },
        {
          type: "doc",
          label: "Setup Wizard",
          id: "dev/references/setup-wizard",
        },
      ],
    },
    {
      type: "doc",
      label: "Github Actions",
      id: "dev/github-actions",
    },
  ],
  smoothSidebar: [
    "smooth",
    {
      type: "doc",
      label: "Overview",
      id: "smooth/overview",
    },
  ],
  daoSidebar: ["dao", "dao/node-basics", "dao/liquidity-mining", "dao/faq"],
};

module.exports = sidebars;
