// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// One Prism theme for light and dark: every colour is a CSS variable from
// src/css/custom.css, so the code palette follows the site's tokens and flips
// with data-theme like everything else.
const codeTheme = {
  plain: { color: "var(--ink)", backgroundColor: "var(--surface-2)" },
  styles: [
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "var(--code-comment)", fontStyle: "italic" } },
    { types: ["keyword", "selector", "important", "atrule", "builtin"], style: { color: "var(--code-keyword)" } },
    { types: ["string", "attr-value", "char", "regex", "inserted"], style: { color: "var(--code-string)" } },
    { types: ["number", "boolean", "constant", "deleted"], style: { color: "var(--code-number)" } },
    { types: ["function", "class-name"], style: { color: "var(--code-function)" } },
    { types: ["property", "tag", "symbol", "attr-name", "variable"], style: { color: "var(--code-tag)" } },
    { types: ["punctuation", "operator"], style: { color: "var(--code-punct)" } },
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jumoo docs",
  tagline: "Documentation for jumoo products",
  url: "https://docs.jumoo.co.uk/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "img/brand/jumoo-badge.svg",
  organizationName: "Jumoo", // Usually your GitHub org/user name.
  projectName: "jumoodocs", // Usually your repo name.

  headTags: [
    { tagName: "link", attributes: { rel: "icon", href: "/img/brand/jumoo-avatar-32.png", type: "image/png", sizes: "32x32" } },
    { tagName: "link", attributes: { rel: "apple-touch-icon", href: "/img/brand/jumoo-avatar-256.png" } },
    { tagName: "link", attributes: { rel: "preload", href: "/fonts/barlow-400-latin.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" } },
  ],

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
              label: "v17.x - Umbraco 17",
            },
            "13.x": {
              label: "v13.x - Umbraco 13",
              banner: "unmaintained",
            },
            "10.x": {
              label: "v10.x - Umbraco 10",
              banner: "unmaintained",
            },
            "8.x": {
              label: "v8.x - Umbraco 8",
              banner: "unreleased",
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
            label: "v17.x - Umbraco 17",
          },
          "13.x": {
            label: "v13.x - Umbraco 13",
            banner: "unmaintained",
          },
          "10.x": {
            label: "v10.x - Umbraco 10",
            banner: "unmaintained",
          },
          "8.x": {
            label: "v8.x - Umbraco 8",
            banner: "unreleased",
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Default share card (1200x630). Docs pages get their product's card
      // from src/theme/DocItem/Metadata. Regenerate with
      // node scripts/make-share-images.mjs.
      image: "img/share/docs.png",
      metadata: [
        { property: "og:site_name", content: "Jumoo docs" },
        { property: "og:type", content: "website" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Jumoo docs" },
        { name: "twitter:image:alt", content: "Jumoo docs" },
      ],
      // Light for everyone by default, whatever the OS prefers (as on
      // jumoo.co.uk). The navbar toggle still switches to dark.
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Docs",
        logo: {
          alt: "Jumoo",
          src: "img/brand/jumoo-wordmark-blue.svg",
          srcDark: "img/brand/jumoo-wordmark-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "uSync",
            className: "nav-product nav-product--usync",
          },
          {
            type: "doc",
            docsPluginId: "tm",
            docId: "intro",
            position: "left",
            label: "Translation Manager",
            className: "nav-product nav-product--tm",
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
          {
            href: "https://jumoo.co.uk",
            label: "jumoo.co.uk",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        logo: {
          alt: "Jumoo",
          src: "img/brand/jumoo-wordmark-blue.svg",
          srcDark: "img/brand/jumoo-wordmark-dark.svg",
          href: "https://jumoo.co.uk",
          height: 44,
        },
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
              {
                label: "Support Lifecycles",
                href: "/SupportLifecycles",
              },
              {
                label: "Product Licences",
                href: "/licences"
              },
            ],
          },
          {
            title: "Products",
            items: [
              {
                label: "uSync",
                href: "https://jumoo.co.uk/usync/",
              },
              {
                label: "uSync.Complete",
                href: "https://jumoo.co.uk/usync/complete/",
              },
              {
                label: "Translation Manager",
                href: "https://jumoo.co.uk/translate/",
              },
            ],
          },
          {
            title: "Elsewhere",
            items: [
              {
                label: "jumoo.co.uk",
                href: "https://jumoo.co.uk",
              },
              {
                label: "Blog",
                href: "https://blog.jumoo.co.uk/",
              },
              {
                label: "Release notes",
                href: "https://releases.jumoo.co.uk/",
              },
              {
                label: "GitHub",
                href: "https://github.com/Jumoo/jumoo-docs",
              },
            ],
          },
        ],
        copyright: `&copy; ${new Date().getFullYear()} Jumoo Ltd. Umbraco is a trademark of Umbraco A/S.`,
      },
      prism: {
        additionalLanguages: ["powershell", "csharp", "bash"],
        theme: codeTheme,
        darkTheme: codeTheme,
      },
    }),
  markdown: {
    format: 'mdx',
    mermaid: true,
    emoji: true,
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent.replaceAll('{{MY_VAR}}', 'MY_VALUE');
    },
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);

      return result;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    anchors: {
      maintainCase: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'throw',
    },
  },
};

module.exports = config;
