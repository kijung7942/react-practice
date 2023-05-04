import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: 1,
    title: "My first Book",
    price: 5,
    description: "the first book i ever wrote",
  },
  {
    id: 2,
    title: "My second Book",
    price: 6,
    description: "the second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem
          key={item.id}
          item={item}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
