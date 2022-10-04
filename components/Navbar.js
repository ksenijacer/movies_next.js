import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/slice";
import {
  selectActiveUser,
  selectIsAuthenticated,
} from "../store/auth/selectors";
import Link from "next/link";
import styles from "../styles/App.module.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className={styles.navbar}>
      <nav>
        {isAuthenticated ? (
          <h5 className={styles.title}>Welcome</h5>
        ) : (
          <h5 className={styles.title}>Guest</h5>
        )}
        <li className={styles.liNavbar}>
          <Link href="/movies">
            <a className={styles.linkName}>Movies</a>
          </Link>
        </li>
        {isAuthenticated ? (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <>
            <li className={styles.liNavbar}>
              <Link href="/login">
                <a className={styles.linkName}>Login</a>
              </Link>
            </li>
            <li className={styles.liNavbar}>
              <Link href="/register">
                <a className={styles.linkName}>Register</a>
              </Link>
            </li>
          </>
        )}
      </nav>
    </div>
  );
}
