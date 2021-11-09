import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { BadgeTitleRewardText } from '../../../screens/HomeScreen';
import HomeRecentActivityItem from '../HomeRecentActivityItem';
import styles from './styles';

/* eslint-disable react/no-array-index-key */

export interface HomeRecentActivityProps {
  navigation: any;
  badgeCompletedTextList: (BadgeTitleRewardText | undefined)[];
}

const MAX_STATIC_ACTIVITY_COUNT = 2;

export const HomeRecentActivity = ({
  navigation,
  badgeCompletedTextList,
}: HomeRecentActivityProps) => {
  const recentActivityCount = badgeCompletedTextList.length;
  const recentActivityList = badgeCompletedTextList.filter(
    item => item !== undefined,
  ) as BadgeTitleRewardText[];

  // displays the recent activity and the view all button
  const canDisplayViewAll = recentActivityCount > MAX_STATIC_ACTIVITY_COUNT;
  const itemsToRender = MAX_STATIC_ACTIVITY_COUNT;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ ...styles.title, flex: 1 }}>RECENT ACTIVITY</Text>
        {canDisplayViewAll && (
          <View style={{ alignSelf: 'flex-end', marginRight: '3%', flex: 0 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('RecentActivities', { recentActivityList });
              }}
            >
              <Text style={styles.buttonText}>View All +</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {recentActivityList
        .slice(0, itemsToRender)
        .map((recentActivity, index) => {
          const { badgeTitle, rewardText } = recentActivity;
          return (
            <HomeRecentActivityItem
              key={`${badgeTitle}_${index}`}
              badgeTitle={badgeTitle}
              rewardText={rewardText}
            />
          );
        })}
    </View>
  );
};
