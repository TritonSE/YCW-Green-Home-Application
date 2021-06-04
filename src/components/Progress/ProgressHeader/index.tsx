import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface IHeaderProps {
  headerText: string;
  headerSubtext?: string;
  backButton?: () => void;
}

const ProgressHeader: React.FC<IHeaderProps> = ({
  headerText,
  headerSubtext,
  backButton,
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={backButton} style={styles.iconContainer}>
        <Ionicons name="ios-arrow-back" size={24} />
      </TouchableOpacity>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
        {headerSubtext && <Text>{headerSubtext}</Text>}
      </View>
      {/* The view below provides padding to center the title text. */}
      <View style={styles.headerPadding} />
    </View>
  );
};

export default ProgressHeader;
