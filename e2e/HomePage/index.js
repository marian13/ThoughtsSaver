import { element, by } from 'detox';

import {
  CREATE_THOUGHT_TEXT_INPUT,
  CREATE_THOUGHT_BUTTON,

  GENERAL_THOUGHT_OPTIONS_BUTTON,
  START_SEARCH_THOUGHT_BY_TEXT_OPTION,

  SEARCH_THOUGHT_INPUT,

  THOUGTH_STREAM
} from '@pages/HomePage/constants/identifiers';

export const createThoughtTextInput = () => element(by.id(CREATE_THOUGHT_TEXT_INPUT));
export const createThoughtButton = () => element(by.id(CREATE_THOUGHT_BUTTON));

export const generalThoughtOptionsButton = () => element(by.id(GENERAL_THOUGHT_OPTIONS_BUTTON));
export const startSearchThoughtByTextOption = () => element(by.id(START_SEARCH_THOUGHT_BY_TEXT_OPTION));

export const searchThoughtInput = () => element(by.id(SEARCH_THOUGHT_INPUT));

export const thougthStream = () => element(by.id(THOUGTH_STREAM));

export const thought = text => element(by.id(THOUGTH_STREAM).and(by.text(text)));

export const createThought = async ({ text }) => {
  await createThoughtTextInput().typeText(text);
  await createThoughtButton().tap();
};

export const startSeachThoughtMode = async () => {
  await generalThoughtOptionsButton().tap();
  await startSearchThoughtByTextOption().tap();
};

export const searchThoughtByText = async({ text }) => {
  await searchThoughtInput().typeText(text);
};
