// https://docs.expo.io/workflow/configuration/

import './dotenv.setup';

const getEntryPoint = () => {
  const { REPL, APP_ENTRY_POINT, REPL_ENTRY_POINT, HELLO } = process.env;

  return REPL ? REPL_ENTRY_POINT : APP_ENTRY_POINT;
};

export default ({ config }) => {
  return { ...config, entryPoint: getEntryPoint() };
};
