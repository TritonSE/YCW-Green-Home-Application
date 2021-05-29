/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfilePage } from '../components/Profile/ProfilePage';
import { SettingsScreen } from '../components/Profile/SettingsScreen';
import Onboarding from '../components/Onboarding/Onboarding';
import { UserContext } from '../contexts/UserContext';

const Stack = createStackNavigator();

export function ProfileScreen() {
  const { userState } = useContext(UserContext);

  // workaround to parse data that may be undefined - to change?
  const homeProp = userState.homes.items[0].home;

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
        <Stack.Screen
          name="Onboarding"
          children={() => <Onboarding homeInformation={homeProp} />} // eslint-disable-line react/no-children-prop
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
