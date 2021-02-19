import React from 'react';
import { Button, Text, View } from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

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
    <View>
      <Button title="Sign Out" onPress={SignOut} />
    </View>
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
