import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.scss';

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === 'dark' ? { background: 'white' } : { background: '#0f172a' }
      }
    >
      <img src="/moon.png" alt="moon" />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></div>
      <img src="/sun.png" alt="sun" />
    </div>
  );
}

export default ThemeToggle;
