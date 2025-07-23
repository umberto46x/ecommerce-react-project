import type { Product } from '../../models/Product';

export const ProductCard = (props) => {
  return (
    <>
      <article className="product__card">
        <img
          className="product__img"
          src={props.product.image}
          alt={props.product.description}
        />
        <h3 className="product__title">{props.product.title}</h3>
        <p className="product__price">{props.product.price}€</p>
        <button className="product__cta" type="button">
          Add to cart
        </button>
      </article>
      ;
    </>
  );
};
