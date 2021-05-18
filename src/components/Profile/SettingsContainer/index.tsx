import React, { useContext, useState } from 'react';
import { Auth } from 'aws-amplify';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { AppContext } from '../../../contexts/AppContext';
import { UserContext } from '../../../contexts/UserContext';

import SettingsBox from '../SettingsBox';

const SettingsContainer = () => {
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

  return (
    <View>
      {/* account section */}
      <View style={styles.account}>
        <Text style={styles.title}>ACCOUNT</Text>
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
          password
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
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={onboardingPage}>
            <Text style={styles.buttonText}>EDIT HOME INFO</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
      {/* support section */}
      <View style={styles.support}>
        <Text style={styles.title}>SUPPORT</Text>
        {/* table */}
        <SettingsBox
          type="Text"
          icon="information-circle-outline"
          text="Help &amp; Support"
        />
        <SettingsBox type="Text" icon="shield-outline" text="Privacy Policy" />
        {/* log out */}
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={signOut}>
            <Text style={styles.buttonText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsContainer;
