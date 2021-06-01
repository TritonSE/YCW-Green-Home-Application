import React from 'react';
import { View } from 'react-native';
import Logo from '../assets/logo';

import SplashScreenStyles from '../styles/SplashScreenStyles';

const SplashScreen = (): JSX.Element | null => {
  return (
    <View style={SplashScreenStyles.logoContainer}>
      <Logo
        width="100%"
        height="100%"
        style={SplashScreenStyles.logoContainer}
      />
    </View>
  );
};

export default SplashScreen;
