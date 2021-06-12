/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfilePage } from '../components/Profile/ProfilePage';
import { SettingsScreen } from '../components/Profile/SettingsScreen';
import { UserContext } from '../contexts/UserContext';

const Stack = createStackNavigator();

const ProfileScreen = () => {
  const { userState } = useContext(UserContext);

  return (
    <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileScreen;
