/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';

import HomeHeader from '../components/Home/HomeHeader';
import { HomeRecentActivity } from '../components/Home/HomeRecentActivity';
import { BadgeTitleRewardText } from '../components/HomeContainer';
import styles from '../styles/HomeScreenStyles';

interface HomeScreenProps {
  badgeCompletedTextList: (BadgeTitleRewardText | undefined)[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ badgeCompletedTextList }) => {
  return (
    <View style={styles.header}>
      <HomeHeader />
      <HomeRecentActivity badgeCompletedTextList={badgeCompletedTextList} />
    </View>
  );
};

export default HomeScreen;
