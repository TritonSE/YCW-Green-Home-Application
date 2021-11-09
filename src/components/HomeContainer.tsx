import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { NewsItem } from './Home/HomeNews';

export interface BadgeTitleRewardText {
  badgeTitle: string;
  rewardText: string;
}

type HomeStackParams = {
  Home: { badgeCompletedTextList: (BadgeTitleRewardText | undefined)[] };
  News: { news: NewsItem[] };
  Activities: { activities: any };
};
export const HomeStack = createStackNavigator<HomeStackParams>();

export const HomeContainer = () => {
  return <HomeScreen />;
};
