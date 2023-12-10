import { useDispatch, useSelector } from "react-redux";
import { uiActionCreator } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(uiActionCreator.toggleDisplay());
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
