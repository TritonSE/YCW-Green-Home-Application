import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreen, BadgeScreen, ProfileScreen } from '../screens';
import TaskContainer from './TaskContainer';

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
        <Tab.Screen name={NavRoutes.HOME} component={HomeScreen} />
        <Tab.Screen name={NavRoutes.TASKS} component={TaskContainer} />
        <Tab.Screen name={NavRoutes.PROGRESS} component={BadgeScreen} />
        <Tab.Screen name={NavRoutes.ME} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
