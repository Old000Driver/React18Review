import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name:'bill',
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { setBillList } = billStore.actions;

const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/ka");
    if (res.data) dispatch(setBillList(res.data));
    else dispatch(setBillList([]));
  };
};

const reducer = billStore.reducer;

export { getBillList };
export default reducer;
