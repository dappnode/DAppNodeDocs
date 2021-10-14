/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DAppNode',
  tagline: 'Welcome to DAppNode',
  url: 'https://docs.dappnode.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dappnode', // Usually your GitHub org/user name.
  projectName: 'DAppNode', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DAppNode',
      logo: {
        alt: 'DAppNode Logo',
        src: 'img/dappnode-logo.png',
      },
      items: [
        {to: '/', label: 'Docs', position: 'left'},
        {to: '/dao', label: 'DAO', position: 'left'},
        {
          type: 'localeDropdown',
          dropdownItemsAfter: [
            {
              href: 'https://github.com/dappnode/DAppNode',
              label: 'Help Us Translate',
            },
          ],
          position: 'right',
        },
        {
          href: 'https://github.com/dappnode/DAppNode',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      
      defaultMode: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'https://docs.dappnode.io/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/dappnode',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/c28an8dA5k',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DAppNode',
            },
   
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dappnode',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCKnEqk4yVMN_Z6B8ikloYYA',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DAppNode, Inc. Built with Docusaurus.`,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
            routeBasePath: '/',
            editLocalizedFiles: true,
            editUrl:
            'https://github.com/dappnode/DAppNodeDocs/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
