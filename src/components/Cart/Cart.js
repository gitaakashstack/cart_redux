import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  console.log("cart render");

  const cartItemsJSX = items.map((item) => (
    <CartItem id={item.id} item={{ ...item }} />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsJSX}</ul>
    </Card>
  );
};

export default Cart;
