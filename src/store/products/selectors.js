import { createSelector } from '@reduxjs/toolkit';

export const selector = state => {
  return state.products;
};

export const selectorProducts = state => {
  return state.products.products;
};

export const selectorFilter = state => {
  return state.products.filter;
};

// export const productsSortedSelector = state => {
//   const products = state.products.products;
//   return products?.toSorted((a, b) => {
//     console.log('sorting');
//     for (let i = 0; i < 10000000; i++) {}
//     return a.price - b.price;
//   });
// };

export const selectorFilteredProducts = createSelector(
  [selectorProducts, selectorFilter],
  (products, filter) =>
    products
      ? products?.filter(product =>
          product.title.toLowerCase().includes(filter?.toLowerCase())
        )
      : products
);
