import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { UserContext } from '../../../contexts/UserContext';

const ProfileContainer = () => {
  const { userState } = useContext(UserContext);
  const name = userState.displayName;
  const bio = `Member since ${userState.createdAt.split('-')[0]}`;

  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.image}
        source={require('../../../images/profile-pic.png')}
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
