import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(233, 102, 97, 1)',
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonView: {
    zIndex: 1,
    elevation: 1,
    alignItems: 'center',
  },
  buttonRow: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    margin: -0.5,
    backgroundColor: 'white',
  },
  account: {
    padding: 30,
    marginTop: 60,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  support: {
    padding: 30,
  },
  line: {
    marginLeft: 25,
    marginRight: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
});

export default styles;
