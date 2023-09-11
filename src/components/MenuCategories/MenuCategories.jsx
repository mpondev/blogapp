import { Link } from 'react-router-dom';

import styles from './MenuCategories.module.scss';

function MenuCategories() {
  return (
    <div className={styles.categoryList}>
      <Link
        to="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        to="/blog?cat=fashion"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        to="/blog?cat=food"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Food
      </Link>
      <Link
        to="/blog?cat=travel"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        to="/blog?cat=culture"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        Culture
      </Link>
      <Link
        to="/blog?cat=coding"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
    </div>
  );
}

export default MenuCategories;
