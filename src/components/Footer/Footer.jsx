import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo icon" />
          <h1 className={styles.logoText}>mponblog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          accusantium, ducimus dolores vero mollitia corporis consectetur esse
          voluptatem dolorum deserunt error odio, eos necessitatibus
          repudiandae, velit in delectus. Magni, dignissimos!
        </p>
        <div className={styles.icons}>
          <img src="/facebook.png" alt="facebook icon" />
          <img src="/instagram.png" alt="instagram icon" />
          <img src="/tiktok.png" alt="tiktok icon" />
          <img src="/youtube.png" alt="youtube icon" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link to="/">Homepage</Link>
          <Link to="/">Blog</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link to="/">Style</Link>
          <Link to="/">Fashion</Link>
          <Link to="/">Coding</Link>
          <Link to="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">TikYok</Link>
          <Link to="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
