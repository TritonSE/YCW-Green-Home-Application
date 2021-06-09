import React, { useContext, useState } from 'react';
import { Auth } from 'aws-amplify';
import API from '@aws-amplify/api';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { AppContext } from '../../../contexts/AppContext';
import { UserContext } from '../../../contexts/UserContext';
import { updateHome } from '../../../graphql/mutations';
import SettingsBox from '../SettingsBox';

const SettingsContainer = () => {
  const navigation = useNavigation();
  const { setAppState } = useContext(AppContext);
  const { userState, setUserState } = useContext(UserContext);

  // workaround to parse data that may be undefined - to change?
  const homes = userState.homes.items;
  const homesString = JSON.stringify(homes);
  const homesJSON = JSON.parse(homesString);
  const { home } = homesJSON[0];
  const curHomeName = homesJSON[0].home.addressLine1.split(' ')[1];

  const [homeData] = useState(home);
  const [name, setName] = useState(String(userState.displayName));
  const [email, setEmail] = useState(String(userState.username));
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(
    String(homeData.addressLine1) === 'null'
      ? ''
      : String(homeData.addressLine1),
  );
  const [address2, setAddress2] = useState(
    String(homeData.addressLine2) === 'null'
      ? ''
      : String(homeData.addressLine2),
  );
  const [homeName, setHomeName] = useState(curHomeName);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setAppState('Auth');
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
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const onboardingPage = () => {
    setAppState('Onboarding Edit');
  };

  const updateHomeInfo = async () => {
    const response = {
      id: userState.homes.items[0].homeID,
      addressLine1: address,
      addressLine2: address2,
      _version: userState.homes.items[0].home._version, // eslint-disable-line no-underscore-dangle
    };
    const result: any = await API.graphql({
      query: updateHome,
      variables: { input: response },
    });
    if (!result.error) {
      setUserState({
        ...userState,
        homes: {
          ...userState.homes,
          items: [
            {
              ...userState.homes.items[0],
              home: {
                ...userState.homes.items[0].home,
                ...response,
              },
            },
          ],
        },
      });
    }
  };

  return (
    <View>
      {/* account section */}
      <View style={styles.account}>
        <Text style={styles.title}>ACCOUNT</Text>
        {/* table */}
        <SettingsBox
          type="Text"
          icon="person-circle-outline"
          place="Name"
          text={name}
        />
        <SettingsBox
          type="Text"
          icon="mail-outline"
          place="Email"
          text={email}
        />
        <SettingsBox
          type="Input"
          icon="home-outline"
          place="Current Address"
          valueInput={address}
          setInput={setAddress}
          updateOnChange={updateHomeInfo}
        />
        <SettingsBox
          type="Input"
          icon="home-outline"
          place="Current Address Line 2"
          valueInput={address2}
          setInput={setAddress2}
          updateOnChange={updateHomeInfo}
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
