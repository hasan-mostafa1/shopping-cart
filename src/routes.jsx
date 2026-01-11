import App from "./components/app/App";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import ErrorPage from "./components/error_page/ErrorPage";
import Shop from "./components/shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: (
      <ErrorPage
        errorTitle="Page Not Found"
        errorMessage="The page you're looking for doesn't exist or has been moved."
      />
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "shop/:productTitle?", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
