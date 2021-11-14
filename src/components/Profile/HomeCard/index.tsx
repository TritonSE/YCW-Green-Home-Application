import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type HomeCardProps = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

const HomeCard = ({ streetAddress, city, state, zip }: HomeCardProps) => {
  const addressName = streetAddress.split(' ')[1];
  const addressLine = `${streetAddress}\n${city}, ${state} ${zip}`;

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
