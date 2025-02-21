import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'uSync / uSync.Complete',
    img: 'img/complete-256.png',
    link: 'usync/intro',
    description: (
      <>
        uSync lets you keep your Umbraco sites in sync by reading and writing settings to and from the disk
      </>
    ),
  },
  {
    title: 'Translation Manager',
    img: 'img/tmlogo.png',
    link: 'tm',
    description: (
      <>
        Translation Manager provides a quick and simple way to get your Umbraco website translated and works 
        with most major translation services and tools.
      </>
    ),
  }
];

function Feature({ img, link, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <Link className="feature-link" to={link}>
        <div className="text--center">
          <img src={img} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
