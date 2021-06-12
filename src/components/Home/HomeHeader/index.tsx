import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const headerInfo = {
  title: 'WELCOME',
  subtitle: 'View News, Deals, and Recent Activity',
};

const HomeHeader = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{headerInfo.title}</Text>
      <Text style={styles.subtitle}>{headerInfo.subtitle}</Text>
    </View>
  );
};

export default HomeHeader;
