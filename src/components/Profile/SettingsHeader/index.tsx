import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SettingsHeader = () => {
  const navigation = useNavigation();

  const done = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <Text> </Text>
      <Text style={styles.profile}>PROFILE</Text>
      <TouchableOpacity onPress={done}>
        <Text style={styles.done}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsHeader;
