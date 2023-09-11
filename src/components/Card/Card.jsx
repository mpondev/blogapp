import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/p1.jpeg" alt="post image" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.09.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link to="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          error dolor, fugit officiis, quas quam quos veritatis quaerat facilis
          aspernatur, doloremque nemo saepe repudiandae harum modi. Corrupti
          explicabo labore qui.
        </p>
        <Link to="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
