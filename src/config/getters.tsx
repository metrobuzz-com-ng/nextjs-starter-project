import { defaults, i18ns } from "@/constants";
import env from "./dynamicEnv";

const getBaseUrl = () => env.BASE_URL;

const getCurrentLanguage = () => {
  if (!env.CURRENT_LANGUAGE) {
    return defaults.currentLanguage as typeof env.CURRENT_LANGUAGE;
  }

  return env.CURRENT_LANGUAGE;
};

const geti18ns = () => {
  return i18ns[getCurrentLanguage()];
};

const getEnvs = () => env;

const getters = {
  getBaseUrl,
  getCurrentLanguage,
  geti18ns,
  getEnvs,
};

export default getters;
