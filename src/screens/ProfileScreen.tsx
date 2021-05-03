/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfilePage1 } from './ProfilePage1';
import { SettingsScreen } from './SettingsScreen';
import Onboarding from '../components/Onboarding/Onboarding';
import { ExportScreen } from './ExportScreen';

const Stack = createStackNavigator();

export function ProfileScreen() {
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
          component={ProfilePage1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Export"
          component={ExportScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
