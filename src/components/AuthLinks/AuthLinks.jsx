import { Link } from 'react-router-dom';
import styles from './AuthLinks.module.scss';

// temp
const status = 'notauthenticated';

function AuthLinks() {
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
}

export default AuthLinks;
