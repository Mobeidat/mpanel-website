import Link from 'next/link';
import classNames from 'classnames';
import styles from './Footer.module.css';
import React from 'react';
import CompanyLogo from './CompanyLogo';
import SocialMedia from './SocialMedia';

const data = [
  {
    title: 'Product',
    items: [
      { text: 'Features', href: '/features' },
      { text: 'Pricing', href: '/pricing' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={classNames('col-12 col-lg-3', styles.logo)}>
            <CompanyLogo />
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              {data.map(({ title, items }) => (
                <div key={title} className={classNames('col-6 col-lg-3', styles.col, styles.links)}>
                  <h1>{title}</h1>
                  {items.map(({ text, href }) => (
                    <Link key={text} href={href}>
                      <a target={href.startsWith('http') ? '_blank' : null}>{text}</a>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <SocialMedia />
        <div className={styles.copy}>
          <div>Built with love by MAF DL team 2022</div>
        </div>
      </div>
    </footer>
  );
}
