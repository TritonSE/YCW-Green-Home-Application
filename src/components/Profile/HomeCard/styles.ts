import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  address: {
    fontSize: 12,
    paddingTop: 10,
    fontWeight: '300',
  },
  homeCard: {
    margin: 8,
    padding: 10,
    height: 100,
    width: 140,
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
  },
  homeColor: {
    width: '25%',
    height: 30,
    borderRadius: 50,
    backgroundColor: '#E96661',
  },
  homeName: {
    fontSize: 15,
    width: '75%',
    fontStyle: 'italic',
    paddingTop: 5,
    color: '#353935',
  },
  homeSpacing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
