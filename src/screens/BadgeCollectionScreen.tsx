/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/BadgeScreenStyles';
import { GetBadges, CollectionProps } from '../components/BadgeContainer';
import SvgContainer from '../components/SvgContainer';

/**
 * @param navigation: the navigator; takes user from collection to detail page
 * @param route: route.params.level contains the badgeLevel
 * @returns a scroll view screen of badges based on badge level
 */
export function BadgeCollection({ navigation, route }: CollectionProps) {
  const badgeLevel = route.params.level;
  const badges = GetBadges(badgeLevel);

  return (
    <View>
      <ScrollView>
        <Text style={styles.badgeLevelText}>{badgeLevel}</Text>
        <View style={styles.badgeContainer}>
          {badges.allBadges.map(badge => (
            <TouchableOpacity
              key={badge.id}
              style={styles.badgeIcons}
              onPress={() =>
                navigation.push('Detail', { badgeName: badge.title })
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
        </View>
      </ScrollView>
    </View>
  );
}
