// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'LinuXode',
  tagline: 'Situs Belajar Linux, Showcase, dan Komunitas Pengguna Linux.',
  url: 'https://linuxode.gemarkode.or.id',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gemarkode', // Usually your GitHub org/user name.
  projectName: 'linuxode', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Logo LinuXode',
          src: 'img/ico.png',
        },
        items: [
          {to: '/blog', 
          label: 'All Posts', 
          position: 'right'},
          {
            label: 'Ubuntu',
            to: '/blog/tags/ubuntu',
            position: 'right'
          },
          {
            label: 'Arch Linux',
            to: '/blog/tags/arch-linux',
            position: 'right'
          },
          {
            label: 'Basic Linux',
            to: '/blog/tags/basic-linux',
            position: 'right'
          },
               ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },  
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
              {
                label: 'Become a Contributor',
                to: '/docs/become-contributor',
              },
              {
                label: 'Contributing',
                to: '/docs/contributing',
              },
            ],
          },
          {
            title: 'Showcase',
            items: [
              {
                label: 'Ubuntu',
                to: '/blog/tags/ubuntu',
              },
              {
                label: 'Arch Linux',
                to: '/blog/tags/arch-linux',
              },
              {
                label: 'Basic Linux',
                to: '/blog/tags/basic-linux',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Gemar Kode',
                href: 'https://www.gemarkode.or.id',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/gemarkode',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gemarkode',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LinuXode, By Gemar Kode. <br /> Made With Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme
      },
    }),
};

module.exports = config;
