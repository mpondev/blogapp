import { Link } from 'react-router-dom';
import AuthLinks from '../AuthLinks/AuthLinks';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src="/facebook.png" alt="facebook" />
        <img src="/instagram.png" alt="instagram" />
        <img src="/tiktok.png" alt="tiktok" />
        <img src="/youtube.png" alt="youtube" />
      </div>
      <div className={styles.logo}>mponblog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link to="/">Homepage</Link>
        <Link to="/">Contact</Link>
        <Link to="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
