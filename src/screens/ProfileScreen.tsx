import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { Auth } from 'aws-amplify';
import { AppContext } from '../contexts/AppContext';

export default function ProfileScreen() {
  const { setAppState } = useContext(AppContext);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setAppState('Auth');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
