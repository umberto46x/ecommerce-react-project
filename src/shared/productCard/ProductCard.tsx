import type { Product } from '../../models/Product';

export const ProductCard = (product: Product) => {
  <article className="product__card">
    <img
      className="product__img"
      src={product.image}
      alt={product.description}
    />
    <h3 className="product__title">{product.title}</h3>
    <p className="product__price">{product.price}€</p>
    <button className="product__cta" type="button">
      Add to cart
    </button>
  </article>;
};
