import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import Onboarding from './Onboarding/Onboarding';

Auth.configure({ mandatorySignIn: true });

// function SignOut(): void {
//   try {
//     Auth.signOut();
//   } catch (error) {
//     console.error("Error sign out: ", error);
//   }
// }

function AuthContainer() {
  const [appState, setAppState] = useState('Onboarding');
  return (
    <>
      {/* <Button title="Sign Out" onPress={SignOut} /> */}
      {appState === 'Onboarding' && <Onboarding setAppState={setAppState} />}
      {appState === 'App' && (
        <SafeAreaView>
          <Text>Use React Navigation here</Text>
        </SafeAreaView>
      )}
    </>
  );
}

export default withAuthenticator(AuthContainer, {
  usernameAttributes: 'email',
  signUpConfig: {
    hiddenDefaults: ['username', 'phone_number'],
    signUpFields: [
      {
        label: 'Display Name',
        key: 'custom:displayName',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 3,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 4,
        type: 'password',
      },
    ],
  },
});
