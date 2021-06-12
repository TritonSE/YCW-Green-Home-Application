import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { UserContext } from '../../../contexts/UserContext';

const HomeCard = () => {
  const { userState } = useContext(UserContext);

  // workaround to parse data that may be undefined - to change?
  const homes = userState.homes.items;
  const homesString = JSON.stringify(homes);
  const homesJSON = JSON.parse(homesString);
  const addressName = homesJSON[0].home.addressLine1.split(' ')[1];
  const addressLine = `${homesJSON[0].home.addressLine1}\n${homesJSON[0].home.city}, ${homesJSON[0].home.addressState} ${homesJSON[0].home.zipcode}`;

  return (
    <View style={styles.homeCard}>
      <View style={styles.homeSpacing}>
        <Text style={styles.homeName}>{addressName}</Text>
        <View style={styles.homeColor} />
      </View>
      <Text style={styles.address}>{addressLine}</Text>
    </View>
  );
};

export default HomeCard;
