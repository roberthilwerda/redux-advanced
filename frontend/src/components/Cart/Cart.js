import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cart = useSelector(state => state.cart.cart);
  const totalItems = cart.reduce((p, c) => p.amount + c.amount, 0);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {totalItems === 0 ? (
          <div>You have no products in your cart.</div>
        ) : (
          cart.map((product, index) => {

            return (
              <ul key={index}>
                <CartItem
                  item={{ title: product.title, price: product.price, amount: product.amount }}
                />
              </ul>
            )
          })

        )



        }

      </ul>
    </Card>
  );
};

export default Cart;
