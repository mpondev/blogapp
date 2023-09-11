import { Link } from 'react-router-dom';
import styles from './Comments.module.scss';

function Comments() {
  const status = 'authenticated';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.btn}>Send</button>
        </div>
      ) : (
        <Link to="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img src="/p1.jpeg" alt="user image" />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nesciunt ullam in, enim obcaecati reprehenderit repellat, fugit
            veniam fuga a officia quisquam, sed laboriosam assumenda non. Quos,
            possimus? Qui, aperiam.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img src="/p1.jpeg" alt="user image" />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nesciunt ullam in, enim obcaecati reprehenderit repellat, fugit
            veniam fuga a officia quisquam, sed laboriosam assumenda non. Quos,
            possimus? Qui, aperiam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nisi veniam impedit recusandae ab est cupiditate
            aspernatur aliquid expedita quo, aut tenetur eaque voluptates
            reiciendis sit ipsum deserunt quaerat perspiciatis voluptas.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img src="/p1.jpeg" alt="user image" />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nesciunt ullam in, enim obcaecati reprehenderit repellat, fugit
            veniam fuga a officia quisquam, sed laboriosam assumenda non. Quos,
            possimus? Qui, aperiam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
