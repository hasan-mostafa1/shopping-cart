import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import styles from "./App.module.css";
import useProducts from "./hooks/useProducts";
import { useState } from "react";

function App() {
  const [products, error, loading] = useProducts();
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet context={{ products, error, loading, cart, setCart }} />
      </main>
    </>
  );
}

export default App;
