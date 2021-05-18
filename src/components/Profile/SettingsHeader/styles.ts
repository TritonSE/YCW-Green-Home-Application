import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    paddingTop: '8%',
    paddingLeft: '5%',
    paddingRight: '5%',
    zIndex: 1,
  },
  profile: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  done: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
