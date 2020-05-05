export const focus = (state, action) => {
  const key = action.payload;

  state.focuses[key] = true;
};

export const blur = (state, action) => {
  const key = action.payload;

  delete state.focuses[key];
}
