// https://api.rubyonrails.org/classes/Array.html#method-c-wrap
const wrap = object => {
  if (object === undefined) return [];
  if (object === null) return [];
  if (Array.isArray(object)) return object;

  return [object];
};

export default wrap;
