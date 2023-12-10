import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    displayCart: false,
    notificationStatus: {
      status: null,
      message: "",
    },
  },
  reducers: {
    toggleDisplay(state) {
      state.displayCart = !state.displayCart;
    },

    setNotificationStatus(state, { payload }) {
      state.notificationStatus = { ...payload };
    },
  },
});

export const uiActionCreator = uiSlice.actions;
export default uiSlice;
