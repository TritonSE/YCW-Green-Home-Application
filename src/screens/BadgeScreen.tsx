import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BadgeStack, Header } from '../components/BadgeContainer';
import { BadgeHome } from '../screens/BadgeHomeScreen';
import { BadgeCollection } from '../screens/BadgeCollectionScreen';
import { BadgeDetail } from '../screens/BadgeDetailScreen';
import styles from '../styles/BadgeScreenStyles';

/**
 * @returns the badge screen; starts on the badge home with preview
 * of all badge levels, then navigates to collection on badge level,
 * then badge detail
 */
export function BadgeScreen(): JSX.Element | null {
  return (
    <NavigationContainer independent>
      <BadgeStack.Navigator>
        <BadgeStack.Screen
          name="Home"
          component={BadgeHome}
          options={{
            headerTitle: props => <Header />,
            headerStyle: styles.header,
          }}
        />
        <BadgeStack.Screen
          name="Collection"
          component={BadgeCollection}
          options={{
            headerTitle: props => <Header />,
            headerStyle: styles.header,
            headerBackTitle: '',
          }}
        />
        <BadgeStack.Screen
          name="Detail"
          component={BadgeDetail}
          options={{
            headerTitle: 'CONGRATULATIONS',
            headerBackTitle: '',
            headerStyle: styles.header,
          }}
        />
      </BadgeStack.Navigator>
    </NavigationContainer>
  );
}

export default BadgeScreen;
