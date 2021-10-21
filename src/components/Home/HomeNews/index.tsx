import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { BadgeTitleRewardText } from '../../HomeContainer';
import HomeRecentActivityItem from '../HomeRecentActivityItem';
import HomeNewsItem from '../HomeNewsItem';
import styles from './styles';

/* eslint-disable react/no-array-index-key */

export interface HomeRecentActivityProps {
  badgeCompletedTextList: (BadgeTitleRewardText | undefined)[];
}

const MAX_STATIC_ACTIVITY_COUNT = 4;

export const HomeNews = ({
  badgeCompletedTextList,
}: HomeRecentActivityProps) => {
  const [viewAll, setViewAll] = useState(false);
  const recentActivityCount = badgeCompletedTextList.length;
  const recentActivityList = badgeCompletedTextList.filter(
    item => item !== undefined,
  ) as BadgeTitleRewardText[];

  // displays the recent activity and the view all button
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
          NEWS
        </Text>
        {recentActivityList
          .slice(0, itemsToRender)
          .map((recentActivity, index) => {
            const { badgeTitle, rewardText } = recentActivity;
            return (
              <HomeNewsItem
                key={`TEST_${index}`}
                newsTitle="Test Title"
                newsText="This is a news article that has a very long text and would hopefully go to the next line. Here is some extra text to see if the container will expand."
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

  // displays all the recent badges in a scroll view
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

  // displays the correct component based on if the view all button has been pressed
  return viewAll ? <ScrollableRecentActivity /> : <StaticRecentActivity />;
};
