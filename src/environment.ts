import Constants from 'expo-constants';

/*
 * Contains the values for each env variable, depending on release channel.
 * As release channels become defined (ex: staging, prod), add an object containing
 * the env var values. This can then be returned via the getEnvVars function.
 */
const ENV = {
  dev: {
    apolloURI: 'localhost:4000/graphql',
  },
  staging: {}, // object would contain the env vars for a release channel titled 'staging'
};

/*
 * Uses Expo release channels to determine env var values.
 * As more release channels are added (ex: staging, prod), add
 * an if/else-if block to return the property in ENV corresponding to
 * the release channel.
 */
const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  return ENV.dev;

  /* Sample logic to determine env vars when multiple release channels are present:
   *
   *  if (__DEV__) {
   *      return ENV.dev;
   *  } else if (env === 'staging') {
   *      return ENV.staging;
   *  }
   *
   */
};

export default getEnvVars;
