import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  settings: {
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
  pageHeader: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
