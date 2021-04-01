import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthContainer from './auth-container';
import HomeScreen from './home';
import TasksScreen from './tasks';
import ProgressScreen from './progress';

const Tab = createBottomTabNavigator();

export default function NavFlow() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Tasks') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Progress') {
              iconName = focused ? 'ios-clipboard' : 'ios-clipboard';
            } else if (route.name === 'Me') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Me" component={AuthContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
