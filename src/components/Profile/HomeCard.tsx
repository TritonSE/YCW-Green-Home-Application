import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  address: {
    fontSize: 12,
  },
  homeCard: {
    margin: 8,
    padding: 10,
    height: 100,
    width: 140,
    borderRadius: 5,
    backgroundColor: '#fafafa',
  },
  homeColor: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#6ba177',
  },
  homeSpacing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const HomeCard = () => {
  return (
    <View style={styles.homeCard}>
      <View style={styles.homeSpacing}>
        <Text>Mountain</Text>
        <View style={styles.homeColor} />
      </View>
      <Text style={styles.address}>11 Mountain Ave Fresno, CA 92122</Text>
    </View>
  );
};

export default HomeCard;
