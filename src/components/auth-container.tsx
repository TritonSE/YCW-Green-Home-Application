import React, { Fragment } from 'react';
import { Button, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import Onboarding from './Onboarding';

Auth.configure({ mandatorySignIn: true });

function SignOut(): void {
  try {
    Auth.signOut();
  } catch (error) {
    console.error('Error sign out: ', error);
  }
}

function AuthContainer() {
  return (
    <>
      {/* <Button title="Sign Out" onPress={SignOut} /> */}
      <Onboarding />
    </>
  );
}

export default withAuthenticator(AuthContainer, {
  signUpConfig: {
    hiddenDefaults: ['email', 'phone_number'],
    signUpFields: [
      {
        label: 'Email',
        key: 'username',
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
