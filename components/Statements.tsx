import styles from './Statements.module.css';
import classNames from 'classnames';
import Lock from 'assets/lock.svg';
import Shield from 'assets/shield.svg';
import Analytics from 'assets/analytics.svg';
import OpenSource from 'assets/open-source.svg';

const Block = ({ title, icon, children }) => {
  return (
    <div className={classNames('row justify-content-center', styles.block)}>
      <div className={classNames('col-12 col-sm-10 col-lg-8 order-1 order-lg-0', styles.content)}>
        <h1>{title}</h1>
        {children}
      </div>
      <div className={classNames('col-12 col-sm-10 col-lg-4 order-0 order-lg-1', styles.icon)}>
        {icon}
        {icon}
      </div>
    </div>
  );
};

export default function Statements() {
  return (
    <section className={classNames('container', styles.statements)}>
      <Block title="Respect data privacy" icon={<Lock />}>
        <p>
          Mpanel lets you to gather the data you need while respecting the privacy of your users.
          Mpanel does not collect any personal information, does not use cookies, does not track
          users across websites, and is GDPR compliant.
        </p>
        <p>Best of all, you don't need to display an annoying cookie notice.</p>
      </Block>
      <Block title="Own your data" icon={<Shield />}>
        <p>
          Mpanel helps you stay compliant with ever changing data privacy laws. All data collected is
          anonymized, making it impossible to identify any individual user. Rest assured knowing
          that your data is securely in your hands.
        </p>
      </Block>
      <Block title="Simple analytics" icon={<Analytics />}>
        <p>
          Mpanel is easy to use and understand without needing to run complicated reports. Mpanel
          collects only the metrics you care about and everything fits on a single page.
        </p>
      </Block>
    </section>
  );
}
