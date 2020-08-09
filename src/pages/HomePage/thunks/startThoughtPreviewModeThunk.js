import { startThoughtPreviewMode } from '~/pages/HomePage/slice';

const startThoughtPreviewModeThunk = () => (dispatch, getState) => dispatch(startThoughtPreviewMode());

export default startThoughtPreviewModeThunk;
