import { createRoot } from "react-dom/client";
// import App from './src/exercises/bilibili_comment/App'

// const root = createRoot(document.querySelector('#root'))

// root.render(<App />)

const exercise = process.env.REACT_APP_EXERCISE || "bilibili_comment";

import(`./exercises/${exercise}/App.js`).then(({ default: App }) => {
  const root = createRoot(document.querySelector("#root"));
  root.render(<App />);
});
