import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
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
  const underDevelopment = () => {
    alert('This button is under development. It does not do anything.');
  };

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={underDevelopment}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        {/* The view below provided padding between the Delete and Share buttons. */}
        <View style={styles.buttonPadding} />
        <TouchableOpacity onPress={underDevelopment}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BadgeDetails;
