/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMainScreen from '../screens/HomeMainScreen';
import { NewsItem } from '../components/Home/HomeNews';
import HomeNewsViewAll from '../components/Home/HomeNewsViewAll';
import HomeRecentActivityViewAll from '../components/Home/HomeRecentActivityViewAll';

export interface BadgeTitleRewardText {
  badgeTitle: string;
  rewardText: string;
}

export type HomeStackParams = {
  Home: { badgeCompletedTextList: (BadgeTitleRewardText | undefined)[] };
  News: { news: NewsItem[] };
  RecentActivities: { recentActivityList: BadgeTitleRewardText[] };
};
const HomeStack = createStackNavigator<HomeStackParams>();

const HomeScreen = () => {
  return (
    <NavigationContainer independent>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={HomeMainScreen} />
        <HomeStack.Screen name="News" component={HomeNewsViewAll} />
        <HomeStack.Screen
          name="RecentActivities"
          component={HomeRecentActivityViewAll}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
