import { ProductCard } from '../../../shared/productCard/ProductCard';
import { getHottestProducts } from '../../../store/slices/productsSlice';
import { useStateSelector } from '../../../store/store';

export const HotProducts = () => {
  const products = useStateSelector((state) => getHottestProducts(state));
  return (
    <>
      <section className="hotproducts__container">
        <h2>Hot Products</h2>
        <p>Products with the highest average ratings</p>
        <div className="hotproducts__list row">
          {products?.map((p) => (
            <ProductCard product={p}></ProductCard>
          ))}
        </div>
      </section>
      ;
    </>
  );
};
