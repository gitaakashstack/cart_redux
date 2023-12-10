import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { putCartData } from "./store/cart-slice";

let isFirstRender = true;

export const notificationStatus = {
  pending: "PENDING",
  error: "ERROR",
  successful: "SUCCESS",
};

function App() {
  const displayCart = useSelector((state) => state.ui.displayCart);
  const notification = useSelector((state) => state.ui.notificationStatus);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    console.log("in useeffect");
    dispatch(putCartData(items));
  }, [items, dispatch]);

  console.log("app render");
  return (
    <Fragment>
      {notification.status && <Notification {...notification} />}
      <Layout>
        {displayCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
