import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import magnifyIconUrl from "../../assets/icons/magnify.svg";
import loadingIconUrl from "../../assets/icons/loading.svg";
import Product from "../product/Product";
import ErrorPage from "../error_page/ErrorPage";

export default function Shop() {
  const { products, error, loading } = useOutletContext();
  const { cart, setCart } = useOutletContext();
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [matchedProducts, setMatchedProducts] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const categories = products.reduce((acc, product) => {
        const { category } = product;
        if (!acc[category]) {
          acc[category] = [];
        }

        acc[category].push(product);
        return acc;
      }, {});
      setCategories(categories);
    }
    getCategories();
  }, [products]);

  useEffect(() => {
    async function getMatchedProducts() {
      let matched = products;
      if (searchValue) {
        matched = matched.reduce((matches, product) => {
          const productTitle = product.title.toLowerCase();
          const productDescription = product.description.toLowerCase();
          if (
            productTitle.includes(searchValue.toLowerCase()) ||
            productDescription.includes(searchValue.toLowerCase())
          ) {
            matches.push(product);
          }
          return matches;
        }, []);
      }
      if (selectedCategory !== "all") {
        matched = matched.reduce((matches, product) => {
          if (product.category === selectedCategory) {
            matches.push(product);
          }
          return matches;
        }, []);
      }
      setMatchedProducts(matched);
    }
    getMatchedProducts();
  }, [selectedCategory, searchValue, products]);

  if (error)
    return (
      <ErrorPage
        errorTitle="Oops!"
        errorMessage="A network error was encountered."
      />
    );
  if (loading)
    return (
      <div className={styles.loading}>
        <img src={loadingIconUrl} alt="" />
        <p>Loading...</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>The Collection</h1>
        <p>
          Timeless design and modern craftsmanship. Discover high-quality <br />
          pieces for every occasion.
        </p>
      </div>
      <form className={styles.navifgationForm}>
        <div className={styles.searchBar}>
          <img src={magnifyIconUrl} alt="magnify-icon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for products..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          key="all"
          className={selectedCategory === "all" ? styles.active : ""}
        >
          All
        </button>
        {Object.keys(categories).map((category) => {
          return (
            <button
              type="button"
              onClick={() => setSelectedCategory(category)}
              key={category}
              className={selectedCategory === category ? styles.active : ""}
            >
              {category}
            </button>
          );
        })}
      </form>

      {matchedProducts && matchedProducts.length > 0 ? (
        <section className={styles.products}>
          {matchedProducts.map((product) => {
            return (
              <Product
                product={product}
                cart={cart}
                setCart={setCart}
                key={product.id}
              />
            );
          })}
        </section>
      ) : matchedProducts ? (
        <div className={styles.noMatchedProducts}>
          <div>
            <h2>No products match</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
