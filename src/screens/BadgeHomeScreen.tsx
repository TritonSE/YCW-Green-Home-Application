/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';
import { BadgePreview, HomeProps } from '../components/BadgeContainer';
import styles from '../styles/BadgeScreenStyles';

/**
 * @param navigation: the navigator; takes user from home to collection
 * @returns the badge home page with previews of all three badge levels
 */
export function BadgeHome({ navigation }: HomeProps) {
  return (
    <View style={styles.homePage}>
      <BadgePreview stacknav={navigation} badgeLevel="STARTER" />
      <BadgePreview stacknav={navigation} badgeLevel="INTERMEDIATE" />
      <BadgePreview stacknav={navigation} badgeLevel="GURU" />
    </View>
  );
}
