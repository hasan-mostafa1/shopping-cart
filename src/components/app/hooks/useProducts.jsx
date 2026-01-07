import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return [products, error, loading];
}
