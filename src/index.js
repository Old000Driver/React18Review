import { createRoot } from "react-dom/client";
import store from "./store/index.js";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";

import '@Bill/theme.css'

const exercise = process.env.REACT_APP_EXERCISE || "bilibili_comment";

import(`./exercises/${exercise}/App.js`).then(({ default: App }) => {
  const root = createRoot(document.querySelector("#root"));
  root.render(
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
});
reportWebVitals();
