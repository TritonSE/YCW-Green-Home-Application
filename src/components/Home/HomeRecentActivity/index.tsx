import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { BadgeTitleRewardText } from '../../HomeContainer';
import HomeRecentActivityItem from '../HomeRecentActivityItem';
import styles from './styles';

/* eslint-disable react/no-array-index-key */

export interface HomeRecentActivityProps {
  badgeCompletedTextList: (BadgeTitleRewardText | undefined)[];
}

const MAX_STATIC_ACTIVITY_COUNT = 4;

export const HomeRecentActivity = ({
  badgeCompletedTextList,
}: HomeRecentActivityProps) => {
  const [viewAll, setViewAll] = useState(false);
  const recentActivityCount = badgeCompletedTextList.length;
  const recentActivityList = badgeCompletedTextList.filter(
    item => item !== undefined,
  ) as BadgeTitleRewardText[];

  const StaticRecentActivity = () => {
    const canDisplayViewAll = recentActivityCount > MAX_STATIC_ACTIVITY_COUNT;
    const itemsToRender = canDisplayViewAll
      ? MAX_STATIC_ACTIVITY_COUNT
      : recentActivityCount;

    return (
      <View style={styles.container}>
        <Text
          style={{
            ...styles.title,
            alignSelf: 'flex-start',
          }}
        >
          RECENT ACTIVITY
        </Text>
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
        {canDisplayViewAll && (
          <View style={{ paddingTop: 25 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setViewAll(true);
              }}
            >
              <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const ScrollableRecentActivity = () => {
    return (
      <View>
        <Text style={styles.title}>RECENT ACTIVITY</Text>
        <ScrollView style={{ marginLeft: '3%' }}>
          {recentActivityList.map((recentActivity, index) => {
            const { badgeTitle, rewardText } = recentActivity;
            return (
              <HomeRecentActivityItem
                badgeTitle={badgeTitle}
                rewardText={rewardText}
                key={`${badgeTitle}_${index}`}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return viewAll ? <ScrollableRecentActivity /> : <StaticRecentActivity />;
};
