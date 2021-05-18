import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ProfileHeader = () => {
  const navigation = useNavigation();

  const settingsPage = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.settings}>
      <TouchableOpacity onPress={() => console.log('info')}>
        <Ionicons name="information-circle-outline" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.pageHeader}>PROFILE</Text>
      <TouchableOpacity onPress={settingsPage}>
        <Ionicons name="settings" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
