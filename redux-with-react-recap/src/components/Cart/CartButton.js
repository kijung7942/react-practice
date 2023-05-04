import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) =>
    state.cart.items.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0)
  );

  const cartButtonClickHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={cartButtonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};

export default CartButton;
