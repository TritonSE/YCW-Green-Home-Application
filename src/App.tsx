import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import AuthContainer from './components/auth-container';
import SplashScreen from './components/splash-screen';

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
