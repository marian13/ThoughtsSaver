// https://docs.expo.io/workflow/development-mode/

import toBool from '~/utils/booleans/toBool';

const isDevelopment = () => toBool(__DEV__);

export default isDevelopment;
