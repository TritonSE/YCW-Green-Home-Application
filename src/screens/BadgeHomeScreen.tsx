/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';
import { BadgePreview, HomeProps } from '../components/BadgeContainer';
import ProgressHeader from '../components/Progress/ProgressHeader/index';
import styles from '../styles/BadgeScreenStyles';

/**
 * @param navigation: the navigator; takes user from home to collection
 * @returns the badge home page with previews of all three badge levels
 */
export function BadgeHome({ navigation }: HomeProps) {
  const header = 'BADGE COLLECTION';
  const headerSub =
    'Complete more tasks to unlock a new badge and make your home more green!';

  return (
    <View style={styles.homePage}>
      <ProgressHeader headerText={header} headerSubtext={headerSub} />
      <BadgePreview stacknav={navigation} badgeLevel="STARTER" />
      <BadgePreview stacknav={navigation} badgeLevel="INTERMEDIATE" />
      <BadgePreview stacknav={navigation} badgeLevel="GURU" />
    </View>
  );
}
