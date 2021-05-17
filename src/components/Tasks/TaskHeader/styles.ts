import { StyleSheet, Platform } from 'react-native';
import SizeConstants from '../../../common/Sizes';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#86C5BE',
    paddingTop:
      Platform.OS === 'ios'
        ? SizeConstants.topPadding.ios
        : SizeConstants.topPadding.android,
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
    minHeight: '30%',
  },
  dropdownContainer: {
    width: '200%',
    height: '20%',
  },
  dropdownBox: {
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  dropdownLabel: {
    fontSize: 12,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
});

export default styles;
