import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [{
  title: 'Lamp',
  price: 6,
  description: 'Beautiful wireless lamp.'
},
{
  title: 'Chair',
  price: 20,
  description: 'Nice comfortable chair.'
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          products.map((product, index) => {
            return (
              <ProductItem
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            )

          })
        }

      </ul>
    </section>
  );
};

export default Products;
