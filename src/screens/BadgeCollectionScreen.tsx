/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/BadgeScreenStyles';
import { GetBadges, CollectionProps } from '../components/BadgeContainer';
import ProgressHeader from '../components/Progress/ProgressHeader/index';
import SvgContainer from '../components/SvgContainer';

/**
 * @param navigation: the navigator; takes user from collection to detail page
 * @param route: route.params.level contains the badgeLevel
 * @returns a scroll view screen of badges based on badge level
 */
export function BadgeCollection({ navigation, route }: CollectionProps) {
  // header strings
  const header = 'BADGE COLLECTION';
  const headerSub =
    'Complete more tasks to unlock a new badge and make your home more green!';

  const badgeLevel = route.params.level;
  const badges = GetBadges(badgeLevel);
  // to make the badges display in 4 columns
  const bufferArr = Array.from(Array(4).keys());

  // back button functionality
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ScrollView>
        <ProgressHeader
          headerText={header}
          headerSubtext={headerSub}
          backButton={goBack}
        />
        <Text style={styles.badgeLevelText}>{badgeLevel}</Text>
        <View style={styles.badgeContainer}>
          {badges.allBadges.map(badge => (
            <TouchableOpacity
              key={badge.id}
              style={styles.badgeIcons}
              onPress={() =>
                navigation.push('Detail', {
                  badgeName: badge.title,
                  level: route.params.level,
                })
              }
            >
              <SvgContainer
                key={badge.id}
                badgeTitle={badge.title}
                height="75"
                width="75"
                grayscale={badges.unansweredBadges.indexOf(badge) !== -1}
              />
            </TouchableOpacity>
          ))}
          {bufferArr.map(num => (
            <View key={num} style={styles.bufferIcons} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
