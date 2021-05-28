import { StyleSheet, Platform } from 'react-native';

const paddingTop = {
  ios: 15,
  android: 30,
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#86C5BE',
    paddingTop: Platform.OS === 'ios' ? paddingTop.ios : paddingTop.android,
    height: 184,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 33,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default styles;
