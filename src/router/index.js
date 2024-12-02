import { createBrowserRouter, createHashRouter } from "react-router-dom";

import Login from "../exercises/react-router/page/Login";
import Article from "../exercises/react-router/page/Article";

import Layout from "../exercises/react-router/page/Layout/index";
import Board from "../exercises/react-router/page/Board/index";
import About from "../exercises/react-router/page/About/index";
import Notfound from "../exercises/react-router/page/NotFound/index";
import App from "../exercises/Bill/App";
import Month from "@/exercises/Bill/pages/Month";
import Year from "@/exercises/Bill/pages/Year";
import New from "@/exercises/Bill/pages/New";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
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
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // path: "month",
        element: <Month />,
      },
      {
        path: "year",
        element: <Year />,
      },
    ],
  },
  {
    path: "/new",
    element: (
      <div>
        <New />
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
