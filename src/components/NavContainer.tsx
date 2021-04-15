import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  HomeScreen,
  TaskScreen,
  BadgeScreen,
  ProfileScreen,
} from '../screens/index';

const Tab = createBottomTabNavigator();

const NavRoutes = {
  HOME: 'Home',
  TASKS: 'Tasks',
  PROGRESS: 'Progress',
  ME: 'Me',
};
const NavRoutesToIcon = {
  [NavRoutes.HOME]: 'ios-home',
  [NavRoutes.TASKS]: 'ios-list',
  [NavRoutes.PROGRESS]: 'ios-clipboard',
  [NavRoutes.ME]: 'ios-person',
};

export default function NavFlow() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = NavRoutesToIcon[route.name];
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#E96661',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
        <Tab.Screen name="Progress" component={BadgeScreen} />
        <Tab.Screen name="Me" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
