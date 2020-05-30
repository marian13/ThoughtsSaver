// https://api.rubyonrails.org/classes/Array.html#method-c-wrap
export const wrap = object => {
  if (object === undefined) return [];
  if (object === null) return [];
  if (Array.isArray(object)) return object;

  return [object];
};

export const none = array => array.length === 0;

export const any = array => array.length > 0;

