import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'uSync / uSync.Complete',
    badges: [
      {src: 'img/brand/usync-badge.svg', alt: 'uSync'},
      {src: 'img/brand/usync-complete-badge.svg', alt: 'uSync.Complete'},
    ],
    link: '/usync/intro',
    description: (
      <>
        uSync lets you keep your Umbraco sites in sync by reading and writing settings to and from the disk
      </>
    ),
  },
  {
    title: 'Translation Manager',
    badges: [{src: 'img/brand/translation-manager-badge.svg', alt: 'Translation Manager'}],
    link: '/tm/',
    accent: 'translate',
    description: (
      <>
        Translation Manager provides a quick and simple way to get your Umbraco website translated and works 
        with most major translation services and tools.
      </>
    ),
  }
];

function Badge({src, alt}) {
  return <img className={styles.badge} src={useBaseUrl(src)} alt={alt} width="56" height="56" />;
}

function Feature({ badges, link, title, description, accent }) {
  return (
    <li>
      <Link className={clsx(styles.card, accent && styles[accent])} to={link}>
        <div className={styles.badges}>
          {badges.map((b) => <Badge key={b.src} {...b} />)}
        </div>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </Link>
    </li>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <ul className={styles.cards}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
      </div>
    </section>
  );
}
