import { createSlice } from "@reduxjs/toolkit";
import { notificationStatus } from "../App";
import { uiActionCreator } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addItemToCart(state, { payload }) {
      const oldItem = state.items.find((item) => item.id === payload.id);

      if (oldItem) {
        oldItem.quantity += 1;
        oldItem.totalPrice += payload.unitPrice;
      } else {
        state.items.push({
          id: payload.id,
          title: payload.title,
          description: payload.description,
          unitPrice: payload.unitPrice,
          quantity: 1,
          totalPrice: payload.unitPrice,
        });
      }
      state.totalItems += 1;
    },

    removeItemFromCart(state, { payload }) {
      const oldItem = state.items.find((item) => item.id === payload.id);

      if (oldItem.quantity > 1) {
        oldItem.quantity -= 1;
        oldItem.totalPrice -= oldItem.unitPrice;
      } else {
        state.items = state.items.filter((item) => item.id !== payload.id);
      }
      state.totalItems -= 1;
    },
  },
});

export const putCartData = function (cartItems) {
  return async (dispatch) => {
    try {
      dispatch(
        uiActionCreator.setNotificationStatus({
          status: notificationStatus.pending,
          message: "SENDING DATA",
        })
      );
      const response = await fetch(
        "https://practice-http-request-default-rtdb.asia-southeast1.firebasedatabase.app/redux-toolkit-cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok)
        dispatch(
          uiActionCreator.setNotificationStatus({
            status: notificationStatus.error,
            message: "SENDING FAILED",
          })
        );
      dispatch(
        uiActionCreator.setNotificationStatus({
          status: notificationStatus.successful,
          message: "DATA SENT",
        })
      );
    } catch {
      dispatch(
        uiActionCreator.setNotificationStatus({
          status: notificationStatus.error,
          message: "SENDING FAILED",
        })
      );
    } finally {
      setTimeout(() => {
        dispatch(
          uiActionCreator.setNotificationStatus({
            status: null,
            message: "",
          })
        );
      }, 1500);
    }
  };
};

export const cartActionCreator = cartSlice.actions;

export default cartSlice;
