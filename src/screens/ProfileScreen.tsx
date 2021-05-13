import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { Auth } from 'aws-amplify';
import { AppContext } from '../contexts/AppContext';
import { UserContext } from '../contexts/UserContext';

const ProfileScreen = () => {
  const { setAppState } = useContext(AppContext);
  const { setUserState } = useContext(UserContext);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUserState({
        _deleted: null,
        _lastChangedAt: 0,
        _version: 1,
        createdAt: '',
        displayName: '',
        homes: {
          items: [],
          nextToken: null,
          startedAt: null,
        },
        id: '',
        owner: '',
        updatedAt: '',
        username: '',
      });
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
};

export default ProfileScreen;
