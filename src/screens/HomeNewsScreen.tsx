/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';
import { NewsViewAllProps } from '../components/HomeContainer';
import ProgressHeader from '../components/Progress/ProgressHeader/index';
import HomeNewsViewAll from '../components/Home/HomeNewsViewAll';

export function HomeNewsScreen({ navigation, route }: NewsViewAllProps) {
  const { news } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ProgressHeader headerText="CONGRATULATIONS" backButton={goBack} />
      <HomeNewsViewAll news={news} />
    </View>
  );
}
