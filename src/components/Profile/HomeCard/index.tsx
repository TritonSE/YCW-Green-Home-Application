import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type HomeCardProps = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  selected: boolean;
  onPress: () => void;
};

const HomeCard = ({
  streetAddress,
  city,
  state,
  zip,
  selected,
  onPress,
}: HomeCardProps) => {
  const addressName = streetAddress.split(' ')[1];
  const addressLine = `${streetAddress}\n${city}, ${state} ${zip}`;
  const cardStyle = selected
    ? [styles.homeCard, styles.homeCardSelected]
    : styles.homeCard;

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress}>
      <View style={styles.homeSpacing}>
        <Text style={styles.homeName}>{addressName}</Text>
        <View style={styles.homeColor} />
      </View>
      <Text style={styles.address}>{addressLine}</Text>
    </TouchableOpacity>
  );
};

export default HomeCard;
