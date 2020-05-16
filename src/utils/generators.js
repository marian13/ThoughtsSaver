import shortid from 'shortid';

export const generateUniqueId = () => shortid.generate();

export const generateThoughtTestID = thoughtText => `thought-${thoughtText}`;
export const generateTagTestID = tagText => `tag-${tagText}`;
