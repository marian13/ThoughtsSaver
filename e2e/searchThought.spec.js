import { expect } from 'detox';
import { reloadApp } from 'detox-expo-helpers';

import * as HomePage from './HomePage';

describe('ThoughtsSaver', () => {
  beforeEach(async () => await reloadApp());

  it('Search Thought Flow', async () => {
    await HomePage.createThought({ text: 'Life is Great' });
    await HomePage.createThought({ text: 'Money is the Power' });
    await HomePage.createThought({ text: 'Justice is a Woman' });

    await HomePage.startSeachThoughtMode();

    await HomePage.searchThoughtByText({ text: 'Power' });

    await expect(HomePage.thought('Life is Great')).toNotExist();
    await expect(HomePage.thought('Money is the Power')).toExist();
    await expect(HomePage.thought('Justice is a Woman')).toNotExist();
  });
});
