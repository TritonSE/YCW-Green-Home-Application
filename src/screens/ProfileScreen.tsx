/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Text, Button, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Auth } from 'aws-amplify';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../contexts/AppContext';
import styles from '../styles/ProfileScreenStyles';

export function ProfileScreen() {
  const { setAppState } = useContext(AppContext);

  const name = 'John Smith';
  const bio = 'Member since 2021';
  const badgeNumber = 10;

  const signOut = async () => {
    try {
      await Auth.signOut();
      setAppState('Auth');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={{ flexGrow: 1, height: 800 }}
      scrollToOverflowEnabled
    >
      <View style={styles.backgroundGray}>
        <View style={styles.backgroundBlue} />
        <View style={styles.settings}>
          <TouchableOpacity onPress={signOut}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="white"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            PROFILE
          </Text>
          <TouchableOpacity onPress={signOut}>
            <Ionicons name="settings" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.image}
            source={require('../images/profile-pic.png')}
          />
          <View>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainLayout}>
            <View style={styles.numberCircle}>
              <Text style={styles.number}>{badgeNumber}</Text>
            </View>
            <Text style={styles.badgeText}>Total Badges Collected</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.homeTitle}>SWITCH HOME</Text>
          <View style={styles.homesLayout}>
            <TouchableOpacity onPress={signOut}>
              <View style={styles.homeCard}>
                <View style={styles.homeSpacing}>
                  <Text>Mountain</Text>
                  <View style={styles.homeColor} />
                </View>
                <Text style={styles.address}>
                  11 Mountain Ave Fresno, CA 92122
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={signOut}>
              <View style={styles.homeCard}>
                <View style={styles.homeSpacing}>
                  <Text>Mountain</Text>
                  <View style={styles.homeColor} />
                </View>
                <Text style={styles.address}>
                  11 Mountain Ave Fresno, CA 92122
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={signOut}>
              <View style={styles.homeCard}>
                <View style={styles.homeSpacing}>
                  <Text>Mountain</Text>
                  <View style={styles.homeColor} />
                </View>
                <Text style={styles.address}>
                  11 Mountain Ave Fresno, CA 92122
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default ProfileScreen;
