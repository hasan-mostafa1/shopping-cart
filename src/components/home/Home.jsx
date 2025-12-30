import { Link } from "react-router";
import githubIconUrl from "../../assets/icons/github.svg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <span>Your Essential Style,</span> <br />
          <span>Carefully Chosen.</span>
        </h1>
        <p className={styles.description}>
          Welcome to <span>The Edit</span> - where quality, consciousness, and
          timeless design <br /> converge. We present a handpicked collection of
          essentials for your wardrobe <br /> and home, curated for a more
          intentional lifestyle.
        </p>
        <Link to="shop" className={styles.exploreLink}>
          Explore The Collection
        </Link>
        <p className={styles.note}>Discover pieces that matter.</p>
        <a
          href="https://github.com/hasan-mostafa1"
          className={styles.githubLink}
        >
          <img
            src={githubIconUrl}
            alt="Github profile"
            className={styles.icon}
          />
        </a>
      </header>
    </div>
  );
}
