export const show = (state, action) => {
  const key = action.payload;

  state.visibilities[key] = true;
};

export const hide = (state, action) => {
  const key = action.payload;

  delete state.visibilities[key];
};
