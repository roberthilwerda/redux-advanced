import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {

  const dispatch = useDispatch()
  const { title, price, amount } = props.item;

  const total = price * amount;

  const addItemClickHandler = () => {
    dispatch(cartActions.addItem({
      title: title,
      price: price,
      amount: amount,
    }))
  }

  const removeItemClickHandler = () => {
    dispatch(cartActions.removeItem({
      title: title,
      price: price,
      amount: amount,
    }))
   }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemClickHandler}>-</button>
          <button onClick={addItemClickHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
