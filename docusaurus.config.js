// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const UssTheme = require("@elias-cl/uss-kitdigital/dist/css/main.css");
// require("@elias-cl/uss-kitdigital/dist/css/main.css");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "kitdigital",

  url: "https://uss-kitdigital-docs.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "USS", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Asimovers/kitdigital-uss-docs/blob/dev/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Asimovers/kitdigital-uss-docs/blob/dev/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: 'dark',
        title: "",
        logo: {
          alt: "Kit Digital USS",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Documentaci??n Kit Digital",
            class: "uss-btn btn-ternary",
          },
          {
            to: "/blog",
            label: "Changelog",
            position: "right",
            class: "uss-btn btn-ternary",
          },
          // {
          //   href: 'https://github.com/Asimovers/kitdigital-uss-docs',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentaci??n",
            items: [
              {
                label: "Valores de marca",
                to: "/docs/category/valores-de-marca",
              },
              {
                label: "Elementos de dise??o",
                to: "/docs/category/dise??o",
              },
              {
                label: "Informaci??n para desarrolladores",
                to: "/docs/category/desarrolladores",
              },
            ],
          },
          {
            title: "Comunidad",
            items: [
              {
                label: "Discord",
                href: "#",
              },
            ],
          },
          {
            title: "Informaci??n adicional",
            items: [
              {
                label: "Changelog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Asimovers/kitdigital-uss-docs",
              },
            ],
          },
        ],
        copyright: `Kit Digital - Universidad San Sebasti??n ${new Date().getFullYear()}. <br> Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
