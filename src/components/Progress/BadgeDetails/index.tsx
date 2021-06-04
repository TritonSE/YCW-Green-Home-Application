import React from 'react';
import { Text, View } from 'react-native';
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
  return (
    <View style={styles.badgeDetailsContainer}>
      <Text style={styles.badgeTitleText}>{badgeTitle}</Text>
      <Text style={styles.difficultyText}>{difficulty}</Text>
      <Text style={styles.dateEarnedText}>Keep up the good work!</Text>
      <Text style={styles.dateEarnedText}>{dateEarned}</Text>
    </View>
  );
};

export default BadgeDetails;
