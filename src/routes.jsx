import App from "./components/app/App";
import Home from "./components/home/Home";
import ComingSoon from "./components/coming_soon/ComingSoon";
import ErrorPage from "./components/error_page/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ComingSoon /> },
      { path: "cart", element: <ComingSoon /> },
    ],
  },
];

export default routes;
