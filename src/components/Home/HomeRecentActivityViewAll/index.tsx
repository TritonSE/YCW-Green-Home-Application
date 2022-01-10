import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeRecentActivityItem from '../HomeRecentActivityItem';
import {
  BadgeTitleRewardText,
  HomeStackParams,
} from '../../../screens/HomeScreen';
import styles from './styles';

/* eslint-disable react/no-array-index-key */

type HomeRecentActivityViewAllProps = {
  route: RouteProp<HomeStackParams, 'RecentActivities'>;
  navigation: StackNavigationProp<HomeStackParams, 'RecentActivities'>;
};

const HomeRecentActivityViewAll = ({
  route,
  navigation,
}: HomeRecentActivityViewAllProps) => {
  const { recentActivityList } = route.params;

  return (
    <View>
      <Text style={styles.title}>RECENT ACTIVITY</Text>
      <ScrollView style={{ marginLeft: '3%' }}>
        {recentActivityList.map(
          (recentActivity: BadgeTitleRewardText, index: number) => {
            const { badgeTitle, rewardText } = recentActivity;
            return (
              <HomeRecentActivityItem
                badgeTitle={badgeTitle}
                rewardText={rewardText}
                key={`${badgeTitle}_${index}`}
              />
            );
          },
        )}
      </ScrollView>
    </View>
  );
};

export default HomeRecentActivityViewAll;
