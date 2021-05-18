import React, { useContext } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { UserContext } from '../../contexts/UserContext';

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
  image: {
    borderRadius: 60,
    height: 70,
    marginTop: 80,
    marginBottom: 20,
    width: 70,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bio: {
    color: 'white',
    fontSize: 13.5,
    textAlign: 'center',
  },
});

const ProfileContainer = () => {
  const { userState } = useContext(UserContext);
  const name = userState.displayName;
  const bio = `Member from ${userState.createdAt.split('-')[0]}`;

  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.image}
        source={require('../../images/profile-pic.png')}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
};

export default ProfileContainer;
