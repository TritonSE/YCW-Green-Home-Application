/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text, View } from 'react-native';
import { DetailProps } from '../components/BadgeContainer';

/**
 * @TODO Needs to be implemented
 */
export function BadgeDetail({ route }: DetailProps) {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>{route.params.badgeName}</Text>
      <Text>Congratulations</Text>
    </View>
  );
}
