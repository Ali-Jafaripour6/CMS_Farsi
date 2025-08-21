import Comments from "./Components/Comments/Comments";
import Offs from "./Components/Offs/Offs";
import Orders from "./Components/Orders/Orders";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";

const routes = [
  // { path: "/", element: <App /> },
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/offs", element: <Offs /> },
];

export default routes;
