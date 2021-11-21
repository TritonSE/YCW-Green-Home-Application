import React from 'react';
import { AppRegistry } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

// import SplashScreen from './screens/SplashScreen';

import AuthScreen from './screens/AuthScreen';
import { AppProvider } from './contexts/AppContext';
import { UserProvider } from './contexts/UserContext';

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

Auth.configure(awsconfig);

export default function App(): JSX.Element | null {
  return (
    <AppProvider>
      <UserProvider>
        <AuthScreen />
      </UserProvider>
    </AppProvider>
  );
}

AppRegistry.registerComponent('MyApplication', () => App);
