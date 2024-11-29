import { createBrowserRouter, createHashRouter } from "react-router-dom";

import Login from "../exercises/react-router/page/Login";
import Article from "../exercises/react-router/page/Article";

import Layout from "../exercises/react-router/page/Layout/index";
import Board from "../exercises/react-router/page/Board/index";
import About from "../exercises/react-router/page/About/index";
import Notfound from "../exercises/react-router/page/NotFound/index";
import App from "../exercises/Bill/App";

const router = createHashRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       // 默认二级路由
  //       // index: true,
  //       path: "board",
  //       element: <Board />,
  //     },
  //     {
  //       path: "About",
  //       element: <About />,
  //     },
  //   ],
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/article/:id",
  //   element: <Article />,
  // },
  {
    path: "*",
    element: (
      <div>
        <App />
      </div>
    ),
  },

  {
    path: "*",
    element: (
      <div>
        <Notfound />
      </div>
    ),
  },
]);

export default router;
