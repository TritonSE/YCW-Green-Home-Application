import React from 'react';
import { Text, View } from 'react-native';
import SvgContainer from '../../SvgContainer';
import styles from './styles';

interface IBadgeDetailsProps {
  badgeTitle: string;
  dateEarned: string;
  difficulty: string;
}

const BadgeDetails: React.FC<IBadgeDetailsProps> = ({
  badgeTitle,
  dateEarned,
  difficulty,
}) => {
  // alert the user that the buttons are under development
  const formattedDate = Intl.DateTimeFormat('en-US').format(
    new Date(dateEarned),
  );

  return (
    <View style={styles.badgeDetailsContainer}>
      <View style={styles.badgePadding} />
      <SvgContainer badgeTitle={badgeTitle} height="150" width="150" />
      <Text style={styles.badgeTitleText}>{badgeTitle}</Text>
      <Text style={styles.difficultyText}>{difficulty}</Text>
      <Text style={styles.dateEarnedText}>Keep up the good work!</Text>
      <Text style={styles.dateEarnedText}>Earned on {formattedDate}</Text>
    </View>
  );
};

export default BadgeDetails;
