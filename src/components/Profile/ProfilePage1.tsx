/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../styles/ProfileScreenStyles';
import ProfileHeader from './ProfileHeader';
import ProfileContainer from './ProfileContainer';
import HomeCard from './HomeCard';

export function ProfilePage1() {
  const badgeNumber = 10;

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
        <View style={styles.mainContainer}>
          <View style={styles.mainLayout}>
            <View style={styles.numberCircle}>
              <Text style={styles.number}>{badgeNumber}</Text>
            </View>
            <Text style={styles.badgeText}>Total Badges Collected</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.homeTitle}>HOME</Text>
          <View style={styles.homesLayout}>
            <HomeCard />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
