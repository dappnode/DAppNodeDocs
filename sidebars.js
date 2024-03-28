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
              label: "Wireguard",
              id: "user/access-your-dappnode/vpn/wireguard",
            },
            {
              type: "doc",
              label: "OpenVPN",
              id: "user/access-your-dappnode/vpn/openvpn",
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
      label: "Hardware",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/hardware/overview",
        },
        {
          type: "doc",
          label: "Maintenance",
          id: "user/hardware/maintenance",
        },
        {
          type: "doc",
          label: "Temperature",
          id: "user/hardware/temperature",
        },
      ],
    },
    {
      type: "category",
      label: "Staking",
      items: [
        {
          type: "doc",
          label: "Earn with Staking",
          id: "user/staking/overview",
        },
        {
          type: "category",
          label: "Ethereum",
          items: [
            {
              type: "category",
              label: "Solo Staking",
              items: [
                {
                  type: "doc",
                  label: "Mainnet",
                  id: "user/staking/ethereum/solo/mainnet",
                },
                {
                  type: "doc",
                  label: "Testnet",
                  id: "user/staking/ethereum/solo/goerli-prater",
                },
              ],
            },
            {
              type: "category",
              label: "LSD Pools",
              items: [
                {
                  type: "doc",
                  label: "Rocketpool",
                  id: "user/staking/ethereum/lsd-pools/rocketpool",
                },
                {
                  type: "doc",
                  label: "Stakewise",
                  id: "user/staking/ethereum/lsd-pools/stakewise",
                },
                {
                  type: "doc",
                  label: "Stakehouse",
                  id: "user/staking/ethereum/lsd-pools/stakehouse",
                },
              ],
            },
            {
              type: "category",
              label: "DVT Technologies",
              items: [
                {
                  type: "doc",
                  label: "Obol",
                  id: "user/staking/ethereum/dvt-technologies/obol-network",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Gnosis Chain",
          items: [
            {
              type: "doc",
              label: "Gnosis Solo Staking",
              id: "user/staking/gnosis-chain/solo",
            },
          ],
        },
        {
          type: "category",
          label: "LUKSO",
          items: [
            {
              type: "doc",
              label: "LUKSO Solo Staking",
              id: "user/staking/lukso/solo",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Rollups",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/rollups/overview",
        },
        {
          type: "doc",
          label: "Optimism",
          id: "user/rollups/optimism",
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
          label: "Bitcoin",
          id: "user/packages/bitcoin",
        },
        {
          type: "doc",
          label: "Eth Classic",
          id: "user/packages/ethclassic",
        },
        {
          type: "doc",
          label: "Avalanche",
          id: "user/packages/avalanche",
        },
        {
          type: "doc",
          label: "Monero",
          id: "user/packages/monero",
        },
        {
          type: "doc",
          label: "Swarm",
          id: "user/packages/swarm",
        },
        {
          type: "doc",
          label: "Packages' signature",
          id: "user/packages/signature",
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
          label: "Overview",
          id: "user/install/overview",
        },
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
          label: "Setting up Notifications",
          id: "user/ethical-metrics/setup",
        },
        {
          type: "doc",
          label: "Metrics collected",
          id: "user/ethical-metrics/metrics",
        },
        {
          type: "doc",
          label: "Troubleshooting",
          id: "user/ethical-metrics/troubleshooting",
        },
      ],
    },
    {
      type: "category",
      label: "Videos and tutorials",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/videos-and-tutorials/overview",
        },
        {
          type: "doc",
          label: "How to connect a wallet to my node",
          id: "user/videos-and-tutorials/connect-node",
        },
      ],
    },
    {
      type: "doc",
      label: "FAQs",
      id: "user/faqs",
    },
  ],
  devSidebar: [
    "dev",
    {
      type: "category",
      label: "DappnodeSDK",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "dev/sdk/overview",
        },
        {
          type: "doc",
          label: "Commands",
          id: "dev/sdk/commands",
        },
      ],
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
      type: "category",
      label: "Deep dive into Smooth",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "smooth/deep-dive-into-smooth/overview",
        },
        {
          type: "doc",
          label: "Rewards",
          id: "smooth/deep-dive-into-smooth/rewards",
        },
        {
          type: "doc",
          label: "Validator States",
          id: "smooth/deep-dive-into-smooth/states",
        },
        {
          type: "doc",
          label: "Oracle & Smart Contract",
          id: "smooth/deep-dive-into-smooth/oracle-sm",
        },
      ],
    },
    {
      type: "category",
      label: "Subscribe to Smooth!",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "smooth/subscribe-to-smooth/overview",
        },
        {
          type: "doc",
          label: "Automatic subscription",
          id: "smooth/subscribe-to-smooth/automatic",
        },
        {
          type: "doc",
          label: "Manual subscription",
          id: "smooth/subscribe-to-smooth/manual",
        },
      ],
    },
    {
      type: "doc",
      label: "Unsubscribe from Smooth",
      id: "smooth/unsubscribe-from-smooth",
    },
    {
      type: "doc",
      label: "FAQ / Glossary",
      id: "smooth/faq-glossary",
    },
  ],
  daoSidebar: ["dao", "dao/node-basics", "dao/liquidity-mining", "dao/faq"],
};

module.exports = sidebars;
