/* eslint-disable import/prefer-default-export */
import React, { useContext, useState } from 'react';
import { Auth } from 'aws-amplify';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppContext } from '../../contexts/AppContext';
import { UserContext } from '../../contexts/UserContext';
import SettingsBox from './SettingsBox';

export function SettingsScreen() {
  const navigation = useNavigation();
  const { setAppState } = useContext(AppContext);
  const { setUserState } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [homeName, setHomeName] = useState('');

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUserState({
        _deleted: null,
        _lastChangedAt: 0,
        _version: 1,
        createdAt: '',
        displayName: '',
        homes: {
          items: [],
          nextToken: null,
          startedAt: null,
        },
        id: '',
        owner: '',
        updatedAt: '',
        username: '',
      });
      setAppState('Auth');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const onboardingPage = () => {
    navigation.navigate('Onboarding');
  };

  const done = () => {
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'rgba(233, 102, 97, 1)',
      marginTop: 30,
      width: 135,
      height: 50,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonRow: {
      height: 45,
      width: '100%',
      borderWidth: 1,
      borderColor: '#939393',
      padding: 10,
      margin: -0.5,
      backgroundColor: 'white',
    },
    editHome: {
      backgroundColor: 'rgba(233, 102, 97, 1)',
      marginTop: 30,
      width: 220,
      height: 50,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
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
  });

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={{ height: 800 }}
      scrollToOverflowEnabled
    >
      <View>
        <View style={styles.header}>
          <Text> </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 40,
            }}
          >
            PROFILE
          </Text>
          <TouchableOpacity onPress={done}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>DONE</Text>
          </TouchableOpacity>
        </View>
        {/* account section */}
        <View
          style={{
            padding: 30,
            marginTop: 60,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 12,
            }}
          >
            ACCOUNT
          </Text>
          {/* table */}
          <SettingsBox
            type="Input"
            icon="person-circle-outline"
            place="Name"
            valueInput={name}
            setInput={setName}
          />
          <SettingsBox
            type="Input"
            icon="mail-outline"
            place="Email"
            valueInput={email}
            setInput={setEmail}
          />
          <SettingsBox
            type="Input"
            icon="lock-closed-outline"
            place="Password"
            valueInput={password}
            setInput={setPassword}
          />
          <SettingsBox
            type="Input"
            icon="home-outline"
            place="Current Address"
            valueInput={address}
            setInput={setAddress}
          />
          <SettingsBox
            type="Input"
            icon="home-outline"
            place="Current Address Line 2"
            valueInput={address2}
            setInput={setAddress2}
          />
          <SettingsBox
            type="Input"
            icon="home-outline"
            place="Current Home Name"
            valueInput={homeName}
            setInput={setHomeName}
          />
          <SettingsBox type="Text" icon="share-outline" text="Export Data" />
          <View style={{ zIndex: 1, elevation: 1, alignItems: 'center' }}>
            <TouchableOpacity style={styles.editHome} onPress={onboardingPage}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                EDIT HOME INFO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginLeft: 25,
            marginRight: 25,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}
        />
        {/* support section */}
        <View
          style={{
            padding: 30,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 12,
            }}
          >
            SUPPORT
          </Text>
          <SettingsBox
            type="Text"
            icon="information-circle-outline"
            text="Help &amp; Support"
          />
          <SettingsBox
            type="Text"
            icon="shield-outline"
            text="Privacy Policy"
          />
          {/* log out */}
          <View style={{ zIndex: 1, elevation: 1, alignItems: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={signOut}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                LOG OUT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
