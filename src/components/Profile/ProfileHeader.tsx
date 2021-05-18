import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    paddingTop: '8%',
    paddingLeft: '5%',
    paddingRight: '5%',
    zIndex: 1,
  },
  pageHeader: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

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
