import React, { useState } from 'react';
import { Button, ScrollView, View } from 'react-native';

import { BadgeTitleRewardText } from '../../../screens/HomeScreen';
import HomeRecentActivityItem from '../HomeRecentActivityItem';
import styles from './styles';

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
        {recentActivityList.slice(0, itemsToRender).map(recentActivity => {
          const { badgeTitle, rewardText } = recentActivity;
          return (
            <HomeRecentActivityItem
              badgeTitle={badgeTitle}
              rewardText={rewardText}
            />
          );
        })}
        {canDisplayViewAll ? (
          <Button onPress={() => setViewAll(true)} title="VIEW ALL" />
        ) : (
          <></>
        )}
      </View>
    );
  };

  const ScrollableRecentActivity = () => {
    return (
      <ScrollView>
        {recentActivityList.map(recentActivity => {
          const { badgeTitle, rewardText } = recentActivity;
          return (
            <HomeRecentActivityItem
              badgeTitle={badgeTitle}
              rewardText={rewardText}
            />
          );
        })}
      </ScrollView>
    );
  };

  return viewAll ? <StaticRecentActivity /> : <ScrollableRecentActivity />;
};
