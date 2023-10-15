export const handleFullfilledAll = (state, { payload }) => {
  state.products = payload.products;
};

export const handleFullfilledSingle = (state, { payload }) => {
  state.singleProduct = payload;
};
