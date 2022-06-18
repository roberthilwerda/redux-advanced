import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart.cart)

  const gettotalItems = () => {
    if(!cart.length || cart.length === 0){
      return 0;
    } else {
      return cart.reduce((p,c) => p + c.amount, 0);
    }
  }
  
  const clickHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{gettotalItems()}</span>
    </button>
  );
};

export default CartButton;
