import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type HomeCardProps = {
  index: number;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  selected: boolean;
  onPress: () => void;
};

const colors = [
  styles.red,
  styles.darkGreen,
  styles.green,
  styles.turquoise,
  styles.lightTurquoise,
];

const HomeCard = ({
  index,
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
  const colorStyle = colors[index % colors.length];

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress}>
      <View style={styles.homeSpacing}>
        <Text style={styles.homeName}>{addressName}</Text>
        <View style={[styles.homeColor, colorStyle]} />
      </View>
      <Text style={styles.address}>{addressLine}</Text>
    </TouchableOpacity>
  );
};

export default HomeCard;
