const createIdentifier = key => `${HOME_PAGE}-${key}`;
const getIdentifier = key => `${HOME_PAGE}-${key}`;

export const HOME_PAGE = 'homePage';

export const THOUGHT_TEXT_INPUT = createIdentifier('thoughtTextInput');
export const SAVE_THOUGHT_BUTTON = createIdentifier('createThoughtButton');

export const THOUGHT_STREAM = createIdentifier('thoughtStream');

export const GENERAL_THOUGHT_OPTIONS_BUTTON = createIdentifier('generalThoughtOptionsButton');
export const GENERAL_THOUGHT_OPTIONS_MENU = createIdentifier('generalThoughtOptionsMenu');

export const START_SEARCH_THOUGHT_OPTION = createIdentifier('startSearchThoughtOption');

export const SEARCH_THOUGHT_INPUT = createIdentifier('searchThoughtInput');

export const TOGGLE_SEARCH_THOUGHT_OPTIONS_COLLAPSE_BUTTON = createIdentifier('toggleSearchThoughtOptionsCollapseButton');
export const SEARCH_THOUGHT_OPTIONS_COLLAPSE = createIdentifier('searchThoughtOptionsCollapse');

export const SEARCH_THOUGHT_BY_TEXT_OPTION = createIdentifier('searchThoughtByTextOption');
export const SEARCH_THOUGHT_BY_TAG_OPTION = createIdentifier('searchThoughtByTagOption');
export const SEARCH_THOUGHT_FUZZY_OPTION = createIdentifier('searchThoughtFuzzyOption');

export const TOGGLE_EMOJI_PICKER_COLLAPSE_BUTTON = createIdentifier('toggleEmojiPickerButton');
export const EMOJI_PICKER_COLLAPSE = createIdentifier('emojiPickerCollapse');

export const getThoughtMenuID = thought => getIdentifier(`thoughtMenu-${thought.id}`);
