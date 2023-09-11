import { Link } from 'react-router-dom';
import styles from './MenuPosts.module.scss';

function MenuPosts({ withImage }) {
  return (
    <div>
      <div className={styles.items}>
        <Link to="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <img src="/p1.jpeg" alt="post image" />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.09.2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <img src="/p1.jpeg" alt="post image" />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.09.2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <img src="/p1.jpeg" alt="post image" />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.09.2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <img src="/p1.jpeg" alt="post image" />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.09.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuPosts;
