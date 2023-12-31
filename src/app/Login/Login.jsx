import styles from './Login.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialBtn}>Sign in with Google</div>
        <div className={styles.socialBtn}>Sign in with Github</div>
        <div className={styles.socialBtn}>Sign in with Facebook</div>
      </div>
    </div>
  );
}

export default Login;
