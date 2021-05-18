import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    paddingTop: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
    zIndex: 1,
  },
  profile: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  done: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

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
