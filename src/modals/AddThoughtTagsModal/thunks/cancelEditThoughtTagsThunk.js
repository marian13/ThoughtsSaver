import { hide } from '@modules/VisibilitiesModule/slice';

const cancelEditThoughtTagsThunk = () => dispatch => dispatch(hide('addThoughtTagsModal'));

export default cancelEditThoughtTagsThunk;
