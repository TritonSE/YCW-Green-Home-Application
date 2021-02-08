import React from 'react';
import { Text, View } from 'react-native';

import SplashScreenStyles from '../styles/splash-screen-styles';

export default function SplashScreen() {
  return (
    <View style={SplashScreenStyles.logoContainer}>
      {/* add YCW logo as react-native-image */}
      <Text style={{ color: 'white', textAlign: 'center' }}>
        Your Clear Way Logo
      </Text>
    </View>
  );
}
