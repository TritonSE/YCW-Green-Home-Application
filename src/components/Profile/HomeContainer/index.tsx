import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { AppContext } from '../../../contexts/AppContext';
import { ResponseContext } from '../../../contexts/ResponseContext';
import { UserContext } from '../../../contexts/UserContext';

import HomeCard from '../HomeCard';
import AddHomeCard from '../AddHomeCard';

const HomeContainer = () => {
  const { setAppState } = useContext(AppContext);
  const { responseState } = useContext(ResponseContext);
  const { userState } = useContext(UserContext);
  const [selection, setSelection] = useState(0);
  const badgeNumber = responseState.items.length;
  const homes = userState.homes.items.map(homeOwner => homeOwner.home);
  const TEST_HOMES = [
    {
      id: 'a',
      addressLine1: '1234 Clear Way',
      city: 'San Diego',
      addressState: 'CA',
      zipcode: '92093',
    },
    {
      id: 'c',
      addressLine1: '1 Long Street Name Rd',
      city: 'San Diego',
      addressState: 'CA',
      zipcode: '92093',
    },
    {
      id: 'b',
      addressLine1: '5678 Main St',
      city: 'San Diego',
      addressState: 'CA',
      zipcode: '99999',
    },
    {
      id: 'd',
      addressLine1: '5678 Main St',
      city: 'San Diego',
      addressState: 'CA',
      zipcode: '99999',
    },
    {
      id: 'e',
      addressLine1: '5678 Main St',
      city: 'San Diego',
      addressState: 'CA',
      zipcode: '99999',
    },
  ];

  const onboardingPage = () => {
    console.log('Changing app state to onboarding edit');
    setAppState('Onboarding Edit');
  };

  return (
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
        {homes.map((home, index) => {
          const {
            addressLine1 = '',
            city = '',
            addressState = '',
            zipcode,
          } = home;
          const selected = index === selection;
          return (
            <HomeCard
              key={home.id}
              streetAddress={addressLine1}
              city={city}
              state={addressState}
              zip={zipcode}
              selected={selected}
              onPress={() => {
                // open the edit home page
                console.log('switch');
                setSelection(index);
                console.log(index);
                console.log('calling');
                onboardingPage();
              }}
            />
          );
        })}

        {/* {TEST_HOMES.map((home, index) => {
          const {
            addressLine1 = '',
            city = '',
            addressState = '',
            zipcode,
          } = home;
          const selected = index === selection;
          return (
            <HomeCard
              key={home.id}
              streetAddress={addressLine1}
              city={city}
              state={addressState}
              zip={zipcode}
              selected={selected}
              onPress={() => {
                console.log('switch');
                setSelection(index);
              }}
            />
          );
        })} */}
        <AddHomeCard />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('delete')}
        >
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeContainer;
