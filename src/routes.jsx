import App from "./components/app/App";
import Home from "./components/home/Home";
import ComingSoon from "./components/coming_soon/ComingSoon";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ComingSoon /> },
      { path: "cart", element: <ComingSoon /> },
    ],
  },
];

export default routes;
