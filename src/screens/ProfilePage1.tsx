/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/ProfileScreenStyles';
import { UserContext } from '../contexts/UserContext';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileContainer from '../components/Profile/ProfileContainer';

export function ProfilePage1() {
  const navigation = useNavigation();
  const { userState } = useContext(UserContext);

  const name = userState.displayName;
  const bio = 'Member since 2021';
  const badgeNumber = 10;

  const settingsPage = () => {
    navigation.navigate('Settings');
  };

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
            <View style={styles.homeCard}>
              <View style={styles.homeSpacing}>
                <Text>Mountain</Text>
                <View style={styles.homeColor} />
              </View>
              <Text style={styles.address}>
                11 Mountain Ave Fresno, CA 92122
              </Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
