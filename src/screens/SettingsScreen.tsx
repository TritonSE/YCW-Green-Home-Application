/* eslint-disable import/prefer-default-export */
import React, { useContext, useState } from 'react';
import { Auth } from 'aws-amplify';
import { View, Text, TextInput, StyleSheet, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../contexts/AppContext';

export function SettingsScreen() {
  const navigation = useNavigation();
  const { setAppState } = useContext(AppContext);
  const [name, setName] = useState('');

  const signOut = async () => {
    try {
      await Auth.signOut();
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
    buttonRow: {
      height: 45,
      width: '100%',
      borderWidth: 1,
      borderColor: '#939393',
      padding: 10,
      margin: -0.5,
      backgroundColor: 'white',
    },
    inputBox: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderColor: '#939393',
      paddingTop: 20,
      paddingBottom: 20,
      margin: -0.5,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    input: {
      flex: 1,
      color: '#939393',
      fontSize: 18,
      height: 40,
    },
    icon: {
      paddingBottom: 24,
      paddingLeft: 10,
      paddingRight: 10,
    },
    text: {
      flex: 1,
      paddingBottom: 20,
      color: '#939393',
      fontSize: 18,
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            alignItems: 'center',
            width: '100%',
            paddingTop: '10%',
            paddingLeft: '5%',
            paddingRight: '5%',
            zIndex: 1,
          }}
        >
          <Text> </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
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
          <View style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="person-circle-outline"
              size={24}
              color="#939393"
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="mail-outline"
              size={24}
              color="#939393"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={() => console.log('email')}
            />
          </View>
          <View style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="lock-closed-outline"
              size={24}
              color="#939393"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={() => console.log('password')}
            />
          </View>
          <View style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="home-outline"
              size={24}
              color="#939393"
            />
            <TextInput
              style={styles.input}
              placeholder="Current Address"
              onChangeText={() => console.log('address')}
            />
          </View>
          <View style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="home-outline"
              size={24}
              color="#939393"
            />
            <TextInput
              style={styles.input}
              placeholder="Current Address Line 2"
              onChangeText={() => console.log('address2')}
            />
          </View>
          <View style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="home-outline"
              size={24}
              color="#939393"
            />
            <TextInput
              style={styles.input}
              placeholder="Current Home Name"
              onChangeText={() => console.log('home name')}
            />
          </View>
          <TouchableOpacity style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="share-outline"
              size={24}
              color="#939393"
            />
            <Text style={styles.text}>Export Data</Text>
          </TouchableOpacity>
          <View style={{ zIndex: 1, elevation: 1, alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(233, 102, 97, 1)',
                marginTop: 30,
                width: 220,
                height: 50,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={onboardingPage}
            >
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
          <TouchableOpacity style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="information-circle-outline"
              size={24}
              color="#939393"
            />
            <Text style={styles.text}>Help &amp; Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputBox}>
            <Ionicons
              style={styles.icon}
              name="shield-outline"
              size={24}
              color="#939393"
            />
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>
          {/* log out */}
          <View style={{ zIndex: 1, elevation: 1, alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(233, 102, 97, 1)',
                marginTop: 30,
                width: 135,
                height: 50,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={signOut}
            >
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
