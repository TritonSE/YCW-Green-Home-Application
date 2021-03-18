import React from 'react';
import { SafeAreaView, View, AppRegistry } from 'react-native';
import Amplify from 'aws-amplify';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import awsconfig from './aws-exports';

import AuthContainer from './components/auth-container';
import SplashScreen from './components/splash-screen';

import getEnvVars from './environment';

const { apolloURI } = getEnvVars();

/*
   Analytics manually disabled so no event is fired
   on sign-in/sign-out. Else, AWS analytics tries to
   publish an event with no analytics config.
*/
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

// Initialize Apollo Client
const client = new ApolloClient({
  uri: apolloURI,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={{ flex: 1 }}>
        {/* <SplashScreen /> */}
        <View style={{ flex: 4 }}>
          <AuthContainer />
        </View>
      </View>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('MyApplication', () => App);
