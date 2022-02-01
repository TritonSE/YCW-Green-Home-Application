import React, { useContext } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { API, Auth } from 'aws-amplify';
import { deleteHome, deleteHomeOwner } from '../../../graphql/mutations';
import { customGetUser } from '../../../customQueries';
import styles from './styles';
import { ResponseContext } from '../../../contexts/ResponseContext';
import { UserContext } from '../../../contexts/UserContext';

import HomeCard from '../HomeCard';
import AddHomeCard from '../AddHomeCard';

const HomeContainer = () => {
  const { responseState } = useContext(ResponseContext);
  const { userState, setUserState, currentHome, setCurrentHome } =
    useContext(UserContext);
  const badgeNumber = responseState.items.length;
  const homes = userState.homes.items.map(homeOwner => homeOwner.home);

  const removeHome = async (index: number) => {
    // TODO: continue working on delete home implementation
    // copied over from will's branch
    const homeOwner = userState.homes.items[index];
    const { home } = homeOwner;
    await API.graphql({
      query: deleteHomeOwner,
      variables: { input: { id: homeOwner.id } },
    });
    await API.graphql({
      query: deleteHome,
      variables: { input: { id: home.id } },
    });

    const user = await Auth.currentAuthenticatedUser();
    const userData: any = await API.graphql({
      query: customGetUser,
      variables: { id: user.attributes.sub },
    });
    setUserState(userData.data.getUser);
  };

  const deleteHomePrompt = () => {
    Alert.alert(
      'Delete Home?',
      'Are you sure you would like to remove this home from your profile?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => removeHome(currentHome),
          style: 'destructive',
        },
      ],
    );
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
          const selected = index === currentHome;
          return (
            <HomeCard
              key={home.id}
              index={index}
              streetAddress={addressLine1}
              city={city}
              state={addressState}
              zip={zipcode}
              selected={selected}
              onPress={() => {
                setCurrentHome(index);
              }}
            />
          );
        })}
        <AddHomeCard />
      </View>
      {homes.length > 0 && (
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={deleteHomePrompt}>
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeContainer;
