/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import ProfileHeader from '../ProfileHeader';
import ProfileContainer from '../ProfileContainer';
import HomeContainer from '../HomeContainer';

export function ProfilePage1() {
  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={{ height: 600 }}
      scrollToOverflowEnabled
    >
      <StatusBar backgroundColor="#86C5BE" barStyle="dark-content" />
      <View style={styles.backgroundGray}>
        <View style={styles.backgroundBlue} />
        <ProfileHeader />
        <ProfileContainer />
        <HomeContainer />
      </View>
    </KeyboardAwareScrollView>
  );
}
