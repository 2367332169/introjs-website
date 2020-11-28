module.exports = {
  title: 'Intro.js',
  tagline: 'Step-by-step onboarding tour library guide and feature introduction',
  url: 'https://introjs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'usablica', // Usually your GitHub org/user name.
  projectName: 'intro.js', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Intro.js',
      logo: {
        alt: 'Intro.js',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '📚 Docs',
          position: 'left',
        },
        {
          to: 'https://github.com/usablica/intro.js/releases',
          label: '💾 Download',
          position: 'left'
        },
        {
          to: '/docs/support',
          label: '💡 Support',
          position: 'left'
        },
        {
          to: 'blog',
          label: '📝 Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/usablica/intro.js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Usablica Limited`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/usablica/introjs-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/usablica/introjs-website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
