import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import { ResponseContext } from '../contexts/ResponseContext';
import { QuestionContext } from '../contexts/QuestionsContext';
import SvgContainer from '../components/SvgContainer';
import styles from '../styles/BadgeScreenStyles';

type BadgeStackParams = {
  Home: undefined;
  Collection: { level: string };
  Detail: { badgeName: string; level: string };
};
type Badge = { id: string; title: string; level: string };
type BadgePreviewProps = {
  stacknav: StackNavigationProp<BadgeStackParams, 'Home'>;
  badgeLevel: string;
};
export type HomeProps = StackScreenProps<BadgeStackParams, 'Home'>;
export type CollectionProps = StackScreenProps<BadgeStackParams, 'Collection'>;
export type DetailProps = StackScreenProps<BadgeStackParams, 'Detail'>;
export const BadgeStack = createStackNavigator<BadgeStackParams>();

/**
 * @param badgeLevel: string holding value "STARTER", "INTERMEDIATE", "GURU"
 * @returns answered, unanswered, and all badges as a list of type badge
 */
export function GetBadges(badgeLevel: string) {
  const { responseState } = useContext(ResponseContext);
  const { questionState } = useContext(QuestionContext);

  const responseMap = new Map(
    responseState.items.map(response => [response.questionID, response]),
  );

  const answeredBadges: Badge[] = questionState.items.filter(
    question => responseMap.has(question.id) && question.level === badgeLevel,
  );  
  const unansweredBadges: Badge[] = questionState.items.filter(
    question => !responseMap.has(question.id) && question.level === badgeLevel,
  );
  const allBadges: Badge[] = answeredBadges.concat(unansweredBadges);

  return {
    answeredBadges,
    unansweredBadges,
    allBadges,
  };
}


/**
 * @param stacknav: the navigator to go between badge pages
 * @param badgeLevel: string that holds "STARTER", "INTERMEDIATE", "GURU"
 * @returns a touchable opacity with a preview of up to four badges by given
 * badge level; to be used on badge home; the touchable opacity navigates
 * to the collection page
 */
export function BadgePreview({ stacknav, badgeLevel }: BadgePreviewProps) {
  const badges = GetBadges(badgeLevel);
  let badgePreview = badges.allBadges;
  if (badgePreview.length > 4) {
    badgePreview = badgePreview.slice(0, 4);
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => stacknav.push('Collection', { level: badgeLevel })}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.badgeLevelText}>{badgeLevel}</Text>
        </View>
        <View>
          <Text style={styles.viewAllText}>View All +</Text>
        </View>
      </View>
      <View style={styles.badgePreview}>
        {badgePreview.map(badge => (
          <SvgContainer
            key={badge.id}
            badgeTitle={badge.title}
            height="75"
            width="75"
            grayscale={badges.unansweredBadges.indexOf(badge) !== -1}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
}
