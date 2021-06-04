import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BadgeStack, Header } from '../components/BadgeContainer';
import { BadgeHome } from '../screens/BadgeHomeScreen';
import { BadgeCollection } from '../screens/BadgeCollectionScreen';
import { BadgeDetailScreen } from '../screens/BadgeDetailScreen';
import styles from '../styles/BadgeScreenStyles';

/**
 * @returns the badge screen; starts on the badge home with preview
 * of all badge levels, then navigates to collection on badge level,
 * then badge detail
 */
export function BadgeScreen(): JSX.Element | null {
  return (
    <NavigationContainer independent>
      <BadgeStack.Navigator screenOptions={{ headerShown: false }}>
        <BadgeStack.Screen name="Home" component={BadgeHome} />
        <BadgeStack.Screen name="Collection" component={BadgeCollection} />
        <BadgeStack.Screen
          name="Detail"
          component={BadgeDetailScreen}
          options={{ headerShown: false }}
        />
      </BadgeStack.Navigator>
    </NavigationContainer>
  );
}

export default BadgeScreen;
