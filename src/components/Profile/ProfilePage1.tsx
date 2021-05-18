/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../styles/ProfileScreenStyles';
import ProfileHeader from './ProfileHeader';
import ProfileContainer from './ProfileContainer';
import HomeContainer from './HomeContainer';

export function ProfilePage1() {
  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={{ height: 600 }}
      scrollToOverflowEnabled
    >
      <View style={styles.backgroundGray}>
        <View style={styles.backgroundBlue} />
        <ProfileHeader />
        <ProfileContainer />
        <HomeContainer />
      </View>
    </KeyboardAwareScrollView>
  );
}
