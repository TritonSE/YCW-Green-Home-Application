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
        <HomeNewsItem
          key="TEST_1"
          newsTitle="Get Out There!"
          newsText="It all begins with an idea."
        />
        <HomeNewsItem
          key="TEST_2"
          newsTitle="Why Deserts Matter Too"
          newsText="It all begins with an idea."
        />
        <HomeNewsItem
          key="TEST_3"
          newsTitle="New Hope in Old Appalachia"
          newsText="It all begins with an idea."
        />
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
