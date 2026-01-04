// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dappnode",
  tagline: "Simplifying decentralization",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://docs.dappnode.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dappnode", // Usually your GitHub org/user name.
  projectName: "Dappnode", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dappnode/DappnodeDocs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Dappnode Docs",
        logo: {
          alt: "Dappnode Logo",
          src: "img/logo.svg",
          href: "/", // https://dappnode.com
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "userSidebar",
            position: "left",
            label: "User Docs",
          },
          {
            type: "docSidebar",
            sidebarId: "devSidebar",
            position: "left",
            label: "Dev Docs",
          },
          {
            type: "docSidebar",
            sidebarId: "smoothSidebar",
            position: "left",
            label: "Smooth",
          },
          {
            type: "docSidebar",
            sidebarId: "daoSidebar",
            position: "left",
            label: "DAO",
          },
          {
            href: "https://dappnode.com/",
            label: "Dappnode",
            position: "right",
          },
          {
            href: "https://github.com/dappnode/DappnodeDocs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/user/getting-started/choose-your-path",
              },
              {
                label: "Staking",
                to: "/docs/user/staking/overview",
              },
              {
                label: "Access your dappnode",
                to: "/docs/user/access-your-dappnode/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/dappnode",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/dappnode",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/dappnode",
              },
              {
                label: "Dappnode",
                href: "https://dappnode.com/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dappnode. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
