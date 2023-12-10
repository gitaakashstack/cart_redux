import { useDispatch } from "react-redux";
import { cartActionCreator } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, totalPrice, unitPrice, id } = props.item;

  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(
      cartActionCreator.addItemToCart({
        title,
        unitPrice,
        id,
      })
    );
  }

  function removeFromCartHandler() {
    dispatch(
      cartActionCreator.removeItemFromCart({
        id,
      })
    );
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${unitPrice.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
