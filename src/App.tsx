import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(awsconfig);

import { SignUp } from './components/sign-up';

function App() {
  /*
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );*/
  return (
    <View>
      <Text>Hello world.</Text>
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
