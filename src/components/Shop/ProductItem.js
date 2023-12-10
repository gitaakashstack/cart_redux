import { useDispatch } from "react-redux";
import { cartActionCreator } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, unitPrice, description, id } = props;

  const dispatch = useDispatch();

  console.log("product item rendering");

  function addToCartHandler() {
    dispatch(
      cartActionCreator.addItemToCart({
        title,
        unitPrice,
        id,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${unitPrice.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
