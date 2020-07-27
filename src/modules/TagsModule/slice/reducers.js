export const createTag = (state, action) => {
  const { tagAttributes: { id, text, createdAt } } = action.payload;
  const { tags } = state;

  const newTag = { id, text, createdAt, updatedAt: '' };

  tags.push(newTag);
};
