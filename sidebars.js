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
              label: "Tailscale",
              id: "user/access-your-dappnode/vpn/tailscale",
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
          type: "doc",
          label: "Switch staking clients",
          id: "user/staking/switch-clients",
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
                  id: "user/staking/ethereum/solo/holesky",
                },
              ],
            },
            {
              type: "category",
              label: "LSD Pools",
              items: [
                {
                  type: "category",
                  label: "Lido CSM",
                  items: [
                    {
                      type: "doc",
                      label: "Overview",
                      id: "user/staking/ethereum/lsd-pools/lido/overview",
                    },
                    {
                      type: "doc",
                      label: "Register as a Node Operator",
                      id: "user/staking/ethereum/lsd-pools/lido/register",
                    },
                    {
                      type: "doc",
                      label: "I am already a Node Operator",
                      id: "user/staking/ethereum/lsd-pools/lido/already-node-operator",
                    },
                    {
                      type: "doc",
                      label: "Validators performance",
                      id: "user/staking/ethereum/lsd-pools/lido/performance",
                    },
                    {
                      type: "doc",
                      label: "Notifications & Warnings",
                      id: "user/staking/ethereum/lsd-pools/lido/notifications",
                    },
                  ],
                },
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
                {
                  type: "doc",
                  label: "SSV",
                  id: "user/staking/ethereum/dvt-technologies/ssv-network",
                },
                {
                  type: "doc",
                  label: "Diva",
                  id: "user/staking/ethereum/dvt-technologies/diva",
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
            {
              type: "doc",
              label: "Gnosis Incentive Program",
              id: "user/staking/gnosis-chain/incentive-program",
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
          type: "category",
          label: "Understanding Dappnode Packages",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "user/packages/understanding-dappnode-packages/overview",
            },
            {
              type: "doc",
              label: "Info",
              id: "user/packages/understanding-dappnode-packages/info",
            },
            {
              type: "doc",
              label: "Config",
              id: "user/packages/understanding-dappnode-packages/config",
            },
            {
              type: "doc",
              label: "Network",
              id: "user/packages/understanding-dappnode-packages/network",
            },
            {
              type: "doc",
              label: "Logs",
              id: "user/packages/understanding-dappnode-packages/logs",
            },
            {
              type: "doc",
              label: "Backup",
              id: "user/packages/understanding-dappnode-packages/backup",
            },
            {
              type: "doc",
              label: "File manager",
              id: "user/packages/understanding-dappnode-packages/file-manager",
            },
          ],
        },
        {
          type: "doc",
          label: "Packages' signature",
          id: "user/packages/signature",
        },
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
      label: "Notifications",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/notifications/overview",
        },
        {
          type: "doc",
          label: "Notifications List",
          id: "user/notifications/notifications-list",
        },
        {
          type: "doc",
          label: "Inbox",
          id: "user/notifications/inbox",
        },
        {
          type: "doc",
          label: "Settings",
          id: "user/notifications/settings",
        },
        {
          type: "doc",
          label: "Legacy",
          id: "user/notifications/legacy",
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
      label: "Dappnode Cloud",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/dappnode-cloud/overview",
        },
        {
          type: "category",
          label: "Cloud Providers",
          items: [
            {
              type: "category",
              label: "AWS",
              items: [
                {
                  type: "doc",
                  label: "AWS Overview",
                  id: "user/dappnode-cloud/providers/aws/overview",
                },
                {
                  type: "doc",
                  label: "How to set up an Instance",
                  id: "user/dappnode-cloud/providers/aws/set-up-instance",
                },
                {
                  type: "doc",
                  label: "FAQs & Troubleshooting",
                  id: "user/dappnode-cloud/providers/aws/faqs",
                },
              ],
            },
            {
              type: "doc",
              label: "More coming soon",
              id: "user/dappnode-cloud/providers/coming-soon",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Videos and tutorials",
      items: [
        {
          type: "category",
          label: "Driving School",
          items: [
            {
              type: "doc",
              label: "Initial setup",
              id: "user/videos-and-tutorials/driving-school/initial-setup",
            },
            {
              type: "doc",
              label: "Configuration",
              id: "user/videos-and-tutorials/driving-school/configuration",
            },
          ],
        },
        {
          type: "doc",
          label: "Crash Course",
          id: "user/videos-and-tutorials/crash-course",
        },
        {
          type: "category",
          label: "Guides",
          items: [
            {
              type: "doc",
              label: "How to connect a wallet to my node",
              id: "user/videos-and-tutorials/guides/connect-node",
            },
            {
              type: "doc",
              label: "Migrating from Avado",
              id: "user/videos-and-tutorials/guides/migrating-from-avado",
            },
          ],
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
        {
          type: "doc",
          label: "SDK-Publish",
          id: "dev/sdk/sdk-publish",
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
        {
          type: "doc",
          label: "Notifications",
          id: "dev/references/notifications",
        },
      ],
    },
    {
      type: "category",
      label: "Package Development",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "dev/package-development/overview",
        },
        {
          type: "doc",
          label: "Single Configuration",
          id: "dev/package-development/single-configuration",
        },
        {
          type: "doc",
          label: "Multi-Configuration",
          id: "dev/package-development/multi-configuration",
        },
      ],
    },
    {
      type: "category",
      label: "Package Publishing",
      items: [
        {
          type: "doc",
          label: "Publishing Guide",
          id: "dev/package-publishing/publish-packages-clients",
        },
        {
          type: "doc",
          label: "Package Ownership",
          id: "dev/package-publishing/package-ownership",
        },
      ],
    },
    {
      type: "doc",
      label: "Package Metrics",
      id: "dev/metrics",
    },
    {
      type: "doc",
      label: "Package Notifications",
      id: "dev/notifications",
    },
    {
      type: "doc",
      label: "Package DNS",
      id: "dev/dns",
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
        {
          type: "doc",
          label: "Avoid proposing Vanilla Blocks",
          id: "smooth/deep-dive-into-smooth/vanilla-blocks",
        },
        {
          type: "doc",
          label: "Validator Consolidations In Smooth",
          id: "smooth/deep-dive-into-smooth/consolidations",
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
