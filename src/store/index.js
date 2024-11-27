import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";
import foodsReducer from "./modules/takeaway";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    foods: foodsReducer,
  },
});

export default store;
