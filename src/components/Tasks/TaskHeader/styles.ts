import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#86C5BE',
    paddingTop: Platform.OS === 'ios' ? 68 : 40,
    height: 184,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 33,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
  dropdownWrapper: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    zIndex: 10,
    elevation: 10,
  },
  dropdownContainer: {
    width: 98,
    height: 35,
  },
  dropdownBox: {
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  dropdownLabel: {
    fontSize: 12,
  },
  dropdownList: {
    alignItems: 'flex-start',
  },
});

export default styles;
