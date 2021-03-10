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
  staging: {}, // sample object for a 'staging' release channel
};

/*
 * Uses Expo release channels to determine env var values.
 * As more release channels are added (ex: staging, prod), add
 * a if/else-if block to return the property in ENV corresponding to
 * the release channel.
 */
const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  return ENV.dev;
};

export default getEnvVars;
