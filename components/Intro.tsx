import Link from 'next/link';
import { Button } from 'react-basics';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <h1>Own your website analytics</h1>
        <h2>
          <span>Take back control with Mpanel –</span>
          <div>a powerful web analytics platform that gives you 100% data ownership.</div>
        </h2>
        <div className={styles.buttons}>
          <a href="/docs" className="button umami--click--get-started-button">
            <Button size="large" variant="primary">
              Get Started
            </Button>
          </a>
          <a
            href="https://app.umami.is/share/8rmHaheU/umami.is"
            className="button-alt umami--click--live-demo-button"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="large">Live Demo</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
