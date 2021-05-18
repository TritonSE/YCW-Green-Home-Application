import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#939393',
    paddingTop: 20,
    paddingBottom: 20,
    margin: -0.5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    color: '#939393',
    fontSize: 18,
    height: 40,
  },
  icon: {
    paddingBottom: 24,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    flex: 1,
    paddingBottom: 20,
    color: '#939393',
    fontSize: 18,
  },
});

export default styles;
