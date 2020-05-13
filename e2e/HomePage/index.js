import { element, by } from 'detox';

import {
  CREATE_THOUGHT_TEXT_INPUT,
  CREATE_THOUGHT_BUTTON,

  GENERAL_THOUGHT_OPTIONS_BUTTON,
  START_SEARCH_THOUGHT_BY_TEXT_OPTION,

  SEARCH_THOUGHT_INPUT,

  THOUGTH_STREAM
} from '@pages/HomePage/constants/identifiers';

const createThoughtTextInput = () => element(by.id(CREATE_THOUGHT_TEXT_INPUT));
const createThoughtButton = () => element(by.id(CREATE_THOUGHT_BUTTON));

const generalThoughtOptionsButton = () => element(by.id(GENERAL_THOUGHT_OPTIONS_BUTTON));
const startSearchThoughtByTextOption = () => element(by.id(START_SEARCH_THOUGHT_BY_TEXT_OPTION));

const searchThoughtInput = () => element(by.id(SEARCH_THOUGHT_INPUT));

const thougthStream = () => element(by.id(THOUGTH_STREAM));

const thought = text => element(by.id(THOUGTH_STREAM).and(by.text(text)));

const createThought = async ({ text }) => {
  await createThoughtTextInput().typeText(text);
  await createThoughtButton().tap();
};

const startSeachThoughtMode = async () => {
  await generalThoughtOptionsButton().tap();
  await startSearchThoughtByTextOption().tap();
};

const searchThoughtByText = async({ text }) => {
  await searchThoughtInput().typeText(text);
};

export {
  createThoughtTextInput,
  createThoughtButton,
  generalThoughtOptionsButton,
  startSearchThoughtByTextOption,
  searchThoughtInput,
  thougthStream,
  thought,

  createThought,
  startSeachThoughtMode,
  searchThoughtByText
};
