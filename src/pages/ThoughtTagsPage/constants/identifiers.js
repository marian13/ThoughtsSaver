const createIdentifier = key => `${THOUGHT_TAGS_PAGE}-${key}`;

export const THOUGHT_TAGS_PAGE = 'thoughtTagsPage';

export const SEARCH_THOUGHT_TAGS_INPUT = createIdentifier('searchThoughtTagsInput');

export const EMOJI_PICKER_COLLAPSE = createIdentifier('emojiPickerCollapse');
export const TOGGLE_EMOJI_PICKER_COLLAPSE_BUTTON = createIdentifier('toggleEmojiPickerCollapseButton');
