import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#939393',
    margin: -0.5,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    color: '#939393',
    fontSize: 18,
    textAlignVertical: 'center',
    height: 40,
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    flex: 1,
    color: '#939393',
    fontSize: 18,
    textAlignVertical: 'center',
  },
});

export default styles;
