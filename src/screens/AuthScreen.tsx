import React, { useContext } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../assets/logo';
import AuthContainer from '../components/AuthContainer';
import { AppContext } from '../contexts/AppContext';
import AuthScreenStyles from '../styles/AuthScreenStyles';

export default function AuthScreen(): JSX.Element | null {
  const { appState } = useContext(AppContext);

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={AuthScreenStyles.container}
      scrollToOverflowEnabled
    >
      {appState === 'Auth' && (
        <Logo width="320" height="200" style={AuthScreenStyles.logo} />
      )}
      {appState === 'Auth' && <View style={AuthScreenStyles.delimiter} />}
      <AuthContainer />
    </KeyboardAwareScrollView>
  );
}
