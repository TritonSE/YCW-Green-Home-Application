/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';
import { DetailProps } from '../components/BadgeContainer';
import ProgressHeader from '../components/Progress/ProgressHeader/index';
import BadgeDetails from '../components/Progress/BadgeDetails/index';

/**
 * @TODO Needs to be implemented
 */
export function BadgeDetailScreen({ navigation, route }: DetailProps) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressHeader headerText="CONGRATULATIONS" backButton={goBack} />
      <BadgeDetails
        badgeTitle={route.params.badgeName}
        dateEarned="Date Earned Placeholder"
        difficulty={route.params.level}
      />
    </View>
  );
}
