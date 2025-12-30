import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
