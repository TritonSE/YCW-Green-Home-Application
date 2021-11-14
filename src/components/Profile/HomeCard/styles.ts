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
    height: 'auto',
    width: '42%',
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
  },
  homeCardSelected: {
    borderColor: '#377067',
    borderWidth: 2,
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
