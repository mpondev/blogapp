import { Link } from 'react-router-dom';
import styles from './CategoryList.module.scss';

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          to="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <img src="/style.png" alt="style cat" />
          style
        </Link>
        <Link
          to="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <img src="/fashion.png" alt="fashion cat" />
          fashion
        </Link>
        <Link
          to="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <img src="/food.png" alt="food cat" />
          food
        </Link>
        <Link
          to="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <img src="/travel.png" alt="travel cat" />
          travel
        </Link>
        <Link
          to="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <img src="/culture.png" alt="culture cat" />
          culture
        </Link>
        <Link
          to="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <img src="/coding.png" alt="coding cat" />
          coding
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
