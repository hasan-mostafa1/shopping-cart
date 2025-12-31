import styles from "./ErrorPage.module.css";
import alertIconUrl from "../../assets/icons/alert-rhombus.svg";
import { Link } from "react-router";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img src={alertIconUrl} alt="" />
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className={styles.link}>
          Back to Homepage
        </Link>
      </section>
    </div>
  );
}
