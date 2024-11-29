import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";
import foodsReducer from "./modules/takeaway";
import billReducer from "./modules/billStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    foods: foodsReducer,
    bill: billReducer,
  },
});

export default store;
