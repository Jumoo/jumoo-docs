// Renders the 1200x630 social share images in static/img/share/ with
// headless Chrome (or Edge). Same layout as the jumoo.co.uk share images.
// Run after changing a badge or the wording below:
//
//   node scripts/make-share-images.mjs
//
// Set CHROME to the browser executable if it is not in a standard location.
// src/theme/DocItem/Metadata picks which image a docs page uses.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const brand = join(root, "static/img/brand");
const fonts = join(root, "static/fonts");
const outDir = join(root, "static/img/share");

const images = [
  {
    file: "docs.png",
    badge: "jumoo-badge.svg",
    title: "Jumoo docs",
    tagline: "Guides and reference for uSync and Translation Manager.",
  },
  {
    file: "usync.png",
    badge: "usync-badge.svg",
    title: "uSync docs",
    tagline: "Deploy Umbraco settings and content, and keep them in source control.",
  },
  {
    file: "usync-complete.png",
    badge: "usync-complete-badge.svg",
    title: "uSync.Complete docs",
    tagline: "Everything uSync does, plus publishing between live sites.",
  },
  {
    file: "translation-manager.png",
    badge: "translation-manager-badge.svg",
    title: "Translation Manager docs",
    tagline: "Translate your site inside Umbraco - agencies, machine translation and AI.",
  },
];

const chrome =
  process.env.CHROME ||
  [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find(existsSync);

if (!chrome) {
  console.error("No Chrome or Edge found. Set CHROME to the browser executable.");
  process.exit(1);
}

const url = (path) => pathToFileURL(path).href;

const page = ({ badge, title, tagline }) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  @font-face { font-family: Barlow; font-weight: 400; src: url("${url(join(fonts, "barlow-400-latin.woff2"))}"); }
  @font-face { font-family: Barlow; font-weight: 600; src: url("${url(join(fonts, "barlow-600-latin.woff2"))}"); }
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body {
    box-sizing: border-box; padding: 80px 88px; background: #f6f7f9;
    border-top: 14px solid #2f6fe4;
    display: grid; grid-template-columns: 300px 1fr; column-gap: 72px; align-items: center;
    font-family: Barlow, sans-serif; color: #101a28;
  }
  .badge { width: 300px; height: 300px; }
  h1 { margin: 0 0 24px; font-size: ${title.length > 14 ? 60 : 84}px; font-weight: 600; line-height: 1.05; }
  p { margin: 0; font-size: 34px; line-height: 1.3; color: #46536a; }
  .foot { position: absolute; left: 88px; right: 88px; bottom: 44px;
    display: flex; justify-content: space-between; align-items: center;
    color: #2f6fe4; font-size: 26px; }
  .foot img { height: 56px; width: auto; }
</style></head><body>
  <img class="badge" src="${url(join(brand, badge))}" alt="">
  <div><h1>${title}</h1><p>${tagline}</p></div>
  <div class="foot"><img src="${url(join(brand, "jumoo-wordmark-blue.svg"))}" alt=""><span>docs.jumoo.co.uk</span></div>
</body></html>`;

mkdirSync(outDir, { recursive: true });
const work = mkdtempSync(join(tmpdir(), "share-images-"));

try {
  for (const image of images) {
    const html = join(work, image.file.replace(/\.png$/, ".html"));
    writeFileSync(html, page(image));
    execFileSync(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1200,630",
      `--user-data-dir=${join(work, "profile")}`,
      `--screenshot=${join(outDir, image.file)}`,
      "--virtual-time-budget=2000",
      url(html),
    ], { stdio: "ignore" });
    console.log(`wrote static/img/share/${image.file}`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
