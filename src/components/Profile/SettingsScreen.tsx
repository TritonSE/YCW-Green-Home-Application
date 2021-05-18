/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SettingsHeader from './SettingsHeader';
import SettingsContainer from './SettingsContainer';

export function SettingsScreen() {
  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={{ height: 800 }}
      scrollToOverflowEnabled
    >
      <View>
        <SettingsHeader />
        <SettingsContainer />
      </View>
    </KeyboardAwareScrollView>
  );
}
