import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 15,
    marginRight: '3%',
    marginLeft: '3%',
    borderRadius: 25,
    width: '90%',
  },
  newsText: {
    padding: 10,
    paddingLeft: 0,
    fontSize: 17,
    flexWrap: 'wrap',
    flexShrink: 1,
    alignSelf: 'center',
  },
  newsTitle: {
    fontWeight: 'bold',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
