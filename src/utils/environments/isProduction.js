// https://docs.expo.io/workflow/development-mode/

import toBool from '@utils/booleans/toBool';

const isProduction = () => toBool(__DEV__);

export default isProduction;
