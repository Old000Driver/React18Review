import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: "chanel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannels } = channelStore.actions;

// 异步请求
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data.data.channels));
  };
};

export { fetchChannelList };

const reducer = channelStore.reducer;

export default reducer;
