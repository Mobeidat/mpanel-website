import styles from './Features.module.css';
import classNames from 'classnames';

const features = [
  {
    name: 'Simple analytics',
    description:
      'Mpanel measures just the important metrics that you care about and everything is displayed on a single, easy to browse page.',
    image: '/images/feature-website-stats.png',
  },
  {
    name: 'Visitor insights',
    description: `Get detailed breakdowns about your visitors including what browser, OS and device they used.`,
    image: '/images/feature-session-stats.png',
  },
  {
    name: 'Custom events',
    description:
      'Track more than just pageviews. Capture any event on your website like button clicks and form entries.',
    image: '/images/feature-events.png',
  },
  {
    name: 'Powerful filters',
    description:
      'Dive deeper into your data using easy to apply filters. Segment your users any metric such as browser, OS, and country.',
    image: '/images/feature-filters.png',
  },
  {
    name: 'Realtime data',
    description:
      'Get a realtime view of your current website traffic. See the exact pages where your visitors are landing.',
    image: '/images/feature-realtime.png',
  },
  {
    name: 'Multi-language',
    description:
      'Mpanel has been translated into many different languages by the very active open source community.',
    image: '/images/feature-languages.png',
  },
  {
    name: 'Unlimited websites',
    description: `Mpanel is able to track an unlimited number of websites from a single installation. You can even track subdomains and individual URLs.`,
    image: '/images/feature-websites.png',
  },
  {
    name: 'Multiple accounts',
    description:
      'Mpanel can be used to host data for friends or clients. Just create a separate account and they can start tracking their own websites on their own dashboard.',
    image: '/images/feature-accounts.png',
  },
  {
    name: 'Mobile-friendly',
    description:
      'The Mpanel interface has been optimized for mobile so you can view your stats from anywhere.',
    image: '/images/feature-mobile.png',
  },
  {
    name: 'Bypass ad-blockers',
    description:
      'Mpanel is hosted by you under your own domain so you can reliably avoid ad-blockers unlike Google Analytics.',
  },
  {
    name: 'Light-weight',
    description:
      'The tracking script is tiny (only 2KB) and loads lightning fast. It will never slow down your site.',
  },
  {
    name: 'Share data',
    description:
      'If you want to share your stats publicly, you can do so with a uniquely generated URL.',
  },
  {
    name: 'Dark mode',
    description: 'Dark mode included. Choose your favorite theme for Mpanel.',
    image: '/images/feature-dark-mode.png',
  },
];

export default function Features() {
  return (
    <div className={classNames(styles.features)}>
      {features.map(({ name, description, image }) => (
        <div key={name} className={classNames('row', styles.feature)}>
          <div className={classNames('col-12 col-lg-5', styles.text)}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className={classNames('col-12 col-lg-6', styles.image)}>
            {image && <img src={image} alt={name} />}
          </div>
        </div>
      ))}
    </div>
  );
}
