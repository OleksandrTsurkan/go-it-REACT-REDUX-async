export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const handleFullfilled = state => {
  state.isLoading = false;
};

export const handleFullfilledAll = (state, { payload }) => {
  state.products = payload.products;
};

export const handleFullfilledSingle = (state, { payload }) => {
  state.singleProduct = payload;
};
