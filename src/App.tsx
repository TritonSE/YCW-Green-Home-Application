import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, View, AppRegistry } from 'react-native';
import Amplify from 'aws-amplify';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import awsconfig from './aws-exports';

import AuthContainer from './components/auth-container';
import SplashScreen from './components/splash-screen';

Amplify.configure(awsconfig);

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <SplashScreen />
        <View style={{ flex: 4 }}>
          <AuthContainer />
        </View>
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('MyApplication', () => App);
