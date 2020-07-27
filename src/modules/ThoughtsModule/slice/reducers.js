import { find, isUndefined } from 'lodash';

export const createThought = (state, action) => {
  const { thoughtAttributes: { id, text, createdAt, tags } } = action.payload;
  const { thoughts } = state;

  const newThought = { id, text, createdAt, updatedAt: '', tags };

  thoughts.push(newThought);
};

export const updateThought = (state, action) => {
  const { thoughtAttributes: { id, text, updatedAt, tags } } = action.payload;
  const { thoughts } = state;

  const thought = find(thoughts, { id });

  if (!isUndefined(text)) thought.text = text;
  if (!isUndefined(updatedAt)) thought.updatedAt = updatedAt;
  if (!isUndefined(tags)) thought.tags = tags;
};
