import { Link } from "react-router";
import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import deleteIconUrl from "../../assets/icons/delete.svg";

export default function Cart() {
  const { products } = useOutletContext();
  const { cart, setCart } = useOutletContext();

  const subtotal = cart.reduce((res, item) => {
    const product = getProductById(item.productId);
    return res + product.price * item.quantity;
  }, 0);
  const tax = subtotal * (8 / 100);
  const shipping = 5;
  const total = subtotal + tax + shipping;

  function increaseQunatity(itemIndex) {
    const quantity = cart[itemIndex].quantity;
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity = quantity + 1;
    setCart(updatedCart);
  }

  function decreaseQunatity(itemIndex) {
    const quantity = cart[itemIndex].quantity;
    if (quantity > 0) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity = quantity - 1;
      setCart(updatedCart);
    }
  }

  function handleQuantityChange(itemIndex, e) {
    const inputNumber = e.target.value;
    if (
      !inputNumber.includes("-") &&
      !inputNumber.startsWith("0") &&
      !inputNumber.includes(".")
    ) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity = e.target.value;
      setCart(updatedCart);
    }
  }

  function removeItem(itemIndex) {
    const updatedCart = cart.filter((item, index) => index !== itemIndex);
    setCart(updatedCart);
  }

  function getProductById(productId) {
    const product = products.find((product) => {
      return product.id === productId;
    });
    return product;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Shopping Cart</h1>
        <p>Review your items below before proceeding to checkout.</p>
      </div>
      {cart.length > 0 ? (
        <section>
          <div className={styles.cart}>
            {cart.map((item, index) => {
              let product = getProductById(item.productId);
              return (
                <div className={styles.item}>
                  <div className={styles.content}>
                    <Link className={styles.link}>
                      <img src={product.image} alt="" />
                    </Link>
                    <div className={styles.details}>
                      <Link className={styles.link}>
                        <h2>{product.title}</h2>
                      </Link>
                      <p>
                        ${product.price} each (Subtotal: $
                        {roundTo(product.price * item.quantity, 2)})
                      </p>
                    </div>
                    <form className={styles.editItem}>
                      <div className={styles.quantity}>
                        <button
                          className={styles.decrease}
                          type="button"
                          onClick={() => {
                            decreaseQunatity(index);
                          }}
                        >
                          <span>–</span>
                        </button>
                        <input
                          type="number"
                          name=""
                          id=""
                          value={item.quantity}
                          onChange={(e) => {
                            handleQuantityChange(index, e);
                          }}
                        />
                        <button
                          className={styles.increase}
                          type="button"
                          onClick={() => {
                            increaseQunatity(index);
                          }}
                        >
                          <span>+</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    <img src={deleteIconUrl} alt="" />
                  </button>
                </div>
              );
            })}
          </div>
          <aside>
            <div className={styles.orderDetails}>
              <h2>Order Summary</h2>
              <ul>
                <li>
                  <span>Subtotal</span>
                  <span>${roundTo(subtotal, 2)}</span>
                </li>
                <li>
                  <span>Shipping</span>
                  <span>${roundTo(shipping, 2)}</span>
                </li>
                <li>
                  <span>Tax (8%)</span>
                  <span>${roundTo(tax, 2)}</span>
                </li>
              </ul>
              <p className={styles.total}>
                <span>Total</span>
                <span>{roundTo(total, 2)}</span>
              </p>
              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </section>
      ) : (
        <section className={styles.empty}>
          <div className={styles.emptyCart}>
            <p>Your cart is currently empty.</p>
            <Link to="/shop" className={styles.link}>
              Continue Shopping
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

function roundTo(n, digits) {
  var negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    n = (n * -1).toFixed(digits);
  }
  return n;
}
