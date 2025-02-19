// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jumoo docs",
  tagline: "Documentation for jumoo products",
  url: "https://docs.jumoo.co.uk/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Jumoo", // Usually your GitHub org/user name.
  projectName: "jumoodocs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "usync",
          lastVersion: "current",
          routeBasePath: "usync",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.

          editUrl: "https://github.com/Jumoo/jumoo-docs/edit/master",
          versions: {
            current: {
              label: "v15.x - Umbraco 15",
            },
            "13.x": {
              label: "v13.x - Umbraco 13",
              banner: "none",
            },
            "12.x": {
              label: "v12.x - Umbraco 12",
              banner: "unmaintained",
            },

            "10.x": {
              label: "v10.x - Umbraco 10",
              banner: "none",
            },
            "8.x": {
              label: "v8.x - Umbraco 8",
              banner: "none",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tm",
        path: "tm",
        routeBasePath: "tm",
        editUrl: "https://github.com/Jumoo/jumoo-docs/edit/master",
        sidebarPath: require.resolve("./sidebars.js"),
        lastVersion: "current",
        versions: {
          current: {
            label: "v15.x - Umbraco 15",
          },
          "13.x": {
            label: "v13.x - Umbraco 13",
            banner: "none",
          },
          "12.x": {
            label: "v12.x - Umbraco 12",
            banner: "unmaintained",
          },

          "10.x": {
            label: "v10.x - Umbraco 10",
            banner: "none",
          },
          "8.x": {
            label: "v8.x - Umbraco 8",
            banner: "none",
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "JumooDocs",
        logo: {
          alt: "jumoo-logo",
          src: "img/jumoo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "uSync",
          },
          {
            type: "doc",
            docsPluginId: "tm",
            docId: "intro",
            position: "left",
            label: "Translation manager",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            docsPluginId: "tm",
          },
          {
            href: "https://github.com/Jumoo/jumoo-docs/",
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
                label: "uSync",
                to: "/usync/intro",
              },
              {
                label: "Translation Manager",
                to: "/tm/",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "Jumoo",
                href: "https://jumoo.co.uk",
              },
              {
                label: "Products",
                href: "https://jumoo.co.uk/products.php",
              },
              {
                label: "Blog",
                href: "https://jumoo.co.uk/blog",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Jumoo/jumoo-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jumoo.`,
      },
      prism: {
        additionalLanguages: ["powershell", "csharp"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
