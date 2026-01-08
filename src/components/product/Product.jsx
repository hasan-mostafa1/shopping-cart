import { useState } from "react";
import styles from "./Product.module.css";
import cartIconUrl from "../../assets/icons/cart.svg";
import { Link } from "react-router";

export default function Product({ product, cart, setCart }) {
  const [quantities, setQuantities] = useState({});

  function increaseQunatity(productId) {
    const quantity = quantities[productId]?.quantity || 1;
    setQuantities({ ...quantities, [productId]: { quantity: quantity + 1 } });
  }

  function decreaseQunatity(productId) {
    const quantity = quantities[productId]?.quantity || 1;
    if (quantity > 0) {
      setQuantities({
        ...quantities,
        [productId]: { quantity: quantity - 1 },
      });
    }
  }

  function handleQuantityChange(productId, e) {
    const inputNumber = e.target.value;
    if (
      !inputNumber.includes("-") &&
      !inputNumber.startsWith("0") &&
      !inputNumber.includes(".")
    ) {
      setQuantities({
        ...quantities,
        [productId]: { quantity: e.target.value },
      });
    }
  }

  function addToCart(productId) {
    setCart([
      ...cart,
      { productId: productId, quantity: quantities[productId]?.quantity || 1 },
    ]);
  }

  function getFromCart(productId) {
    let product = null;
    cart.forEach((item) => {
      if (item.productId === productId) {
        product = item;
      }
    });
    return product;
  }
  return (
    <div className={styles.product}>
      <Link
        to={`${product.title
          .trim()
          .split(/\s+/)
          .filter((str) => str !== "-" && str !== "–")
          .join("-")}`}
        className={styles.link}
      >
        <img src={product.image} alt="" />
      </Link>
      <div className={styles.description}>
        <p>{product.title}</p>
        <span>${product.price}</span>
      </div>
      <form className={styles.addToCartForm}>
        <div className={styles.quantity}>
          <button
            className={styles.decrease}
            type="button"
            onClick={() => {
              decreaseQunatity(product.id);
            }}
          >
            <span>–</span>
          </button>
          <input
            type="number"
            name=""
            id=""
            value={
              quantities[product.id]?.quantity ||
              getFromCart(product.id)?.quantity ||
              "1"
            }
            onChange={(e) => {
              handleQuantityChange(product.id, e);
            }}
          />
          <button
            className={styles.increase}
            type="button"
            onClick={() => {
              increaseQunatity(product.id);
            }}
          >
            <span>+</span>
          </button>
        </div>
        {getFromCart(product.id) ? (
          <button
            type="button"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            <img src={cartIconUrl} alt="" /> Update
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            <img src={cartIconUrl} alt="" /> Add
          </button>
        )}
      </form>
    </div>
  );
}
