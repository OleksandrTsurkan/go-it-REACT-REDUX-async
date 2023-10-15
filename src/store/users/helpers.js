export const handleFullfilledAll = (state, { payload }) => {
  state.users = payload.users;
};
