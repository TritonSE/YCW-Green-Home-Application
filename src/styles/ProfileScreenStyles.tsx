import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  address: {
    fontSize: 12,
  },
  backgroundBlue: {
    position: 'absolute',
    width: '100%',
    height: 270,
    backgroundColor: '#86C5BE',
  },
  backgroundGray: {
    justifyContent: 'flex-start',
    backgroundColor: '#fafafa',
    height: '100%',
  },
  badgeText: {
    color: '#353935',
    fontSize: 20,
  },
  homeTitle: {
    paddingTop: 15,
    paddingLeft: 5,
    paddingBottom: 15,
  },
  homesLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  homeCard: {
    margin: 8,
    padding: 10,
    height: 100,
    width: 140,
    borderRadius: 5,
    backgroundColor: '#fafafa',
  },
  homeColor: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#6ba177',
  },
  homeSpacing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    marginLeft: 3,
    marginRight: 3,
    borderBottomColor: '#BFE3D5',
    borderBottomWidth: 0.5,
  },
  mainContainer: {
    position: 'absolute',
    top: 230,
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
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  numberCircle: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 8,
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: '#6ba177',
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
});

export default styles;
