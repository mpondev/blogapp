import styles from './Featured.module.scss';

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, mpondev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img src="/p1.jpeg" alt="image1" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            temporibus necessitatibus voluptatum excepturi et reprehenderit,
            veniam id voluptate. Totam porro doloribus repellendus saepe,
            incidunt molestiae excepturi alias accusantium. Atque, tempora?
          </p>
          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
