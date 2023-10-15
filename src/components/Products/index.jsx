import { useEffect, useState } from 'react';
import FormSearchProducts from '../Forms/FormSearchProducts/index';
import Product from '../Product';
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from 'store/products/thunks';
import { selector, selectorFilteredProducts } from 'store/products/selectors';
import { setFilterAction } from 'store/products/slice';

const Products = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(selector);
  // const products = useSelector(selectorProducts);
  const filteredProducts = useSelector(selectorFilteredProducts);
  // const sortedProducts = useSelector(productsSortedSelector);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    !filteredProducts && dispatch(getAllProducts());
  }, [dispatch, filteredProducts]);

  const handleSetSearchQuery = e => {
    dispatch(setFilterAction(e ?? ''));
  };

  return (
    <>
      <button onClick={() => setCounter(prev => prev + 1)}>{counter}</button>
      {error && <h1>{error}</h1>}
      <FormSearchProducts submit={handleSetSearchQuery} />
      {isLoading && <h1>Loading...</h1>}
      {filteredProducts &&
        (!filteredProducts.length ? (
          <h1>No data found</h1>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="container mt-3">
              <Product product={product} />
            </div>
          ))
        ))}
    </>
  );
};

export default Products;
