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
      {/* Only render the back button if necessary! */}
      {backButton && (
        <TouchableOpacity onPress={backButton} style={styles.iconContainer}>
          <Ionicons name="chevron-back-outline" size={24} />
        </TouchableOpacity>
      )}
      {/* Fix alignment issue when no back button */}
      {!backButton && (
        <Ionicons style={{opacity:0}} name="chevron-back-outline" size={24} />
      )}
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
        {headerSubtext && (
          <Text style={styles.headerSubtext}>{headerSubtext}</Text>
        )}
      </View>
      {/* The view below provides padding to center the title text. */}
      <View style={styles.headerPadding} />
    </View>
  );
};

export default ProgressHeader;
