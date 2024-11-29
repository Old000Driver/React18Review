import { createBrowserRouter } from "react-router-dom";

import Login from "../exercises/react-router/page/Login";
import Article from "../exercises/react-router/page/Article";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "*",
    element: <div>默认页面</div>,
  },
]);

export default router