/* eslint-disable import/prefer-default-export */
import React from 'react';
import { BadgeTitleRewardText } from '../components/HomeContainer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from '../components/HomeContainer';
import { HomeNewsScreen } from './HomeNewsScreen';
import HomeMainScreen from './HomeMainScreen';

interface HomeScreenProps {
  badgeCompletedTextList: (BadgeTitleRewardText | undefined)[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ badgeCompletedTextList }) => {
  return (
    <NavigationContainer independent>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen
          name="Home"
          children={() => (
            <HomeMainScreen badgeCompletedTextList={badgeCompletedTextList} />
          )}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="HomeNewsViewAll"
          component={HomeNewsScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
    // <View style={styles.header}>
    //   <HomeHeader />
    //   <HomeNews />
    //   <HomeRecentActivity badgeCompletedTextList={badgeCompletedTextList} />
    // </View>
  );
};

export default HomeScreen;
