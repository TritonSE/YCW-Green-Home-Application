/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from '../components/HomeContainer';
import HomeMainScreen from '../screens/HomeMainScreen';
import HomeNewsViewAll from '../components/Home/HomeNewsViewAll';
import HomeRecentActivityViewAll from '../components/Home/HomeRecentActivityViewAll';

const HomeScreen = () => {
  return (
    <NavigationContainer independent>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={HomeMainScreen} />
        <HomeStack.Screen name="News" component={HomeNewsViewAll} />
        <HomeStack.Screen
          name="Activities"
          component={HomeRecentActivityViewAll}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
