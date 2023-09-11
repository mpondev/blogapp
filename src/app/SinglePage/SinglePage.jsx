import Comments from '../../components/Comments/Comments';
import Menu from '../../components/Menu/Menu';

import styles from './SinglePage.module.scss';

function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <img src="/p1.jpeg" alt="user image" />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/p1.jpeg" alt="post image" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              et, eos possimus dignissimos dolores reprehenderit deserunt
              obcaecati iste ut adipisci nobis unde inventore. Facilis, harum
              praesentium reiciendis possimus voluptatem esse? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Accusantium rem ratione
              officia tempora. Consequuntur et dicta fugit consequatur
              voluptatibus obcaecati quia sit corrupti, tempora sint enim
              ratione ad iste possimus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              et, eos possimus dignissimos dolores reprehenderit deserunt
              obcaecati iste ut adipisci nobis unde inventore. Facilis, harum
              praesentium reiciendis possimus voluptatem esse?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              et, eos possimus dignissimos dolores reprehenderit deserunt
              obcaecati iste ut adipisci nobis unde inventore. Facilis, harum
              praesentium reiciendis possimus voluptatem esse? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ut natus error saepe
              expedita consequatur quos repellendus voluptatibus? Tempora, culpa
              dolores delectus illum optio similique beatae iusto obcaecati
              voluptate ducimus consequuntur.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
