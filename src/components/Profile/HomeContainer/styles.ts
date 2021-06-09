import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 220,
    alignSelf: 'center',
    height: 300,
    width: '90%',
    borderRadius: 5,
    paddingLeft: '2.5%',
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
  },
  line: {
    marginRight: '2.5%',
    borderBottomColor: '#BFE3D5',
    borderBottomWidth: 1,
  },
});

export default styles;
