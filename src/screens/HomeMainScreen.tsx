/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';
import HomeHeader from '../components/Home/HomeHeader';
import HomeNews from '../components/Home/HomeNews';
import { HomeRecentActivity } from '../components/Home/HomeRecentActivity';
import { BadgeTitleRewardText } from '../components/HomeContainer';
import styles from '../styles/HomeScreenStyles';

interface HomeScreenProps {
  badgeCompletedTextList: (BadgeTitleRewardText | undefined)[];
}

const HomeMainScreen: React.FC<HomeScreenProps> = ({
  badgeCompletedTextList,
}) => {
  return (
    <View style={styles.header}>
      <HomeHeader />
      <HomeNews />
      <HomeRecentActivity badgeCompletedTextList={badgeCompletedTextList} />
    </View>
  );
};

export default HomeMainScreen;
