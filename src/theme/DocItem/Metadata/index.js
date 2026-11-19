// Swizzled (ejected) from @docusaurus/theme-classic. The only change: when a
// page sets no `image` in its front matter, it gets the share card for its
// product (static/img/share, made by scripts/make-share-images.mjs) instead
// of the site-wide one, plus the image alt text.

import React from "react";
import Head from "@docusaurus/Head";
import { PageMetadata } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";

const cards = [
  { match: /^\/usync\/([^/]+\/)?complete(\/|$)/, image: "img/share/usync-complete.png", alt: "uSync.Complete docs" },
  { match: /^\/usync(\/|$)/, image: "img/share/usync.png", alt: "uSync docs" },
  { match: /^\/tm(\/|$)/, image: "img/share/translation-manager.png", alt: "Translation Manager docs" },
];

export default function DocItemMetadata() {
  const { metadata, frontMatter, assets } = useDoc();
  const ownImage = assets.image ?? frontMatter.image;
  const card = ownImage ? undefined : cards.find((c) => c.match.test(metadata.permalink));

  return (
    <>
      <PageMetadata
        title={metadata.title}
        description={metadata.description}
        keywords={frontMatter.keywords}
        image={ownImage ?? card?.image}
      />
      {card && (
        <Head>
          <meta property="og:image:alt" content={card.alt} />
          <meta name="twitter:image:alt" content={card.alt} />
        </Head>
      )}
    </>
  );
}
