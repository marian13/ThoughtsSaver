import { isVisibleSelector, show, hide } from '~/modules/VisibilitiesModule/slice';

import { ADVANCED_SAVE_THOUGHT_MODAL } from '~/pages/HomePage/constants/identifiers';

const toggleAdvancedSaveThoughModalThunk = () => (dispatch, getState) => {
  const isModalVisible = isVisibleSelector(ADVANCED_SAVE_THOUGHT_MODAL)(getState());

  isModalVisible ? dispatch(hide(ADVANCED_SAVE_THOUGHT_MODAL)) : dispatch(show(ADVANCED_SAVE_THOUGHT_MODAL));
};

export default toggleAdvancedSaveThoughModalThunk;
