import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthLinks.module.scss';

function AuthLinks() {
  const [open, setOpen] = useState(false);
  // temp
  const status = 'notauthenticated';

  return (
    <>
      {status === 'notauthenticated' ? (
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link to="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link to="/">Homepage</Link>
          <Link to="/">Contact</Link>
          <Link to="/">About</Link>
          {status === 'notauthenticated' ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
