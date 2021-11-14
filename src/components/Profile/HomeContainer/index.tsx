import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ResponseContext } from '../../../contexts/ResponseContext';
import { UserContext } from '../../../contexts/UserContext';

import HomeCard from '../HomeCard';

const HomeContainer = () => {
  const { responseState } = useContext(ResponseContext);
  const { userState } = useContext(UserContext);
  const badgeNumber = responseState.items.length;
  const homes = userState.homes.items.map(homeOwner => homeOwner.home);

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
        {homes.map(home => {
          const {
            addressLine1 = '',
            city = '',
            addressState = '',
            zipcode,
          } = home;
          return (
            <HomeCard
              streetAddress={addressLine1}
              city={city}
              state={addressState}
              zip={zipcode}
            />
          );
        })}
      </View>
    </View>
  );
};

export default HomeContainer;
