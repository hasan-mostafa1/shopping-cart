import styles from "./ComingSoon.module.css";
import comingSoonIconUrl from "../../assets/icons/wrench-clock.svg";
import { Link } from "react-router";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img src={comingSoonIconUrl} alt="" />
        <h1>Coming soon...</h1>
        <p>The page you are looking for still under development</p>
        <Link to="/" className={styles.link}>
          Back to Homepage
        </Link>
      </section>
    </div>
  );
}
