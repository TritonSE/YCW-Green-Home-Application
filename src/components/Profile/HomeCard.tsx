import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { UserContext } from '../../contexts/UserContext';

const styles = StyleSheet.create({
  address: {
    fontSize: 12,
    paddingTop: 10,
    fontWeight: '300',
  },
  homeCard: {
    margin: 8,
    padding: 10,
    height: 100,
    width: 140,
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
  },
  homeColor: {
    width: '25%',
    height: 30,
    borderRadius: 50,
    backgroundColor: '#E96661',
  },
  homeName: {
    fontSize: 15,
    width: '75%',
    fontStyle: 'italic',
    paddingTop: 5,
    color: '#353935',
  },
  homeSpacing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const HomeCard = () => {
  const { userState } = useContext(UserContext);

  // workaround to parse data that may be undefined - to change?
  const address = userState.homes.items;
  const addressString = JSON.stringify(address);
  const addressJSON = JSON.parse(addressString);
  const addressName = addressJSON[0].home.addressLine1.split(' ')[1];
  const addressLine = `${addressJSON[0].home.addressLine1}\n${addressJSON[0].home.city}, ${addressJSON[0].home.addressState} ${addressJSON[0].home.zipcode}`;

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
