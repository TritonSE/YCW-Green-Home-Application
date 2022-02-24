import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    height: 'auto',
    width: '90%',
    borderRadius: 5,
    paddingLeft: '2.5%',
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  mainLayout: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    padding: 15,
    minWidth: 53,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numberCircle: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 8,
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: '#6ba177',
  },
  badgeText: {
    color: '#353935',
    fontSize: 20,
  },
  homeTitle: {
    paddingTop: 15,
    paddingLeft: 5,
    paddingBottom: 15,
    fontWeight: '500',
  },
  homesLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  line: {
    marginRight: '2.5%',
    borderBottomColor: '#BFE3D5',
    borderBottomWidth: 1,
  },
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
});

export default styles;
