import { element, expect } from 'detox';
import { reloadApp } from 'detox-expo-helpers';

import sleep from '@utils/sleep';

import * as HomePage from './HomePage';

describe('ThoughtsSaver', () => {
  beforeEach(async () => await reloadApp());

  it('Search Thought Flow', async () => {
    await HomePage.createThought({ text: 'Life is Great' });
    await HomePage.createThought({ text: 'Money is the Power' });
    await HomePage.createThought({ text: 'Justice is a Woman' });

    await HomePage.startSeachThoughtMode();

    await HomePage.searchThoughtByText({ text: 'Power' });

    await expect(element(thougth('Life is Great'))).toNotExist();
    await expect(element(thougth('Money is the Power'))).toExist();
    await expect(element(thougth('Justice is a Woman'))).toNotExist();
  });
});
