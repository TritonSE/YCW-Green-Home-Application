import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import AuthContainer from './components/auth-container';
import SplashScreen from './components/splash-screen';

Amplify.configure(awsconfig);

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SplashScreen />
      <View style={{ flex: 4 }}>
        <AuthContainer />
      </View>
    </SafeAreaView>
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
