import { memo } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Bluetooth Headset",
    description: "Bluetooh headset by Boat",
    unitPrice: 999,
  },
  {
    id: 2,
    title: "Trimmer",
    description: "Awesome smooth trimmer by Philips",
    unitPrice: 799,
  },
  {
    id: 3,
    title: "Mask",
    description: "N75 mask, protecting you from Covid, by Wildcraft",
    unitPrice: 250,
  },
];

const Products = (props) => {
  console.log("products rendering");

  const productItemJSX = DUMMY_ITEMS.map((item) => (
    <ProductItem
      id={item.id}
      title={item.title}
      description={item.description}
      unitPrice={item.unitPrice}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItemJSX}</ul>
    </section>
  );
};

export default memo(Products);
