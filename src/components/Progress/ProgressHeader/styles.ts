import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#86C5BE',
    flexDirection: 'row',
  },
  headerPadding: {
    flex: 1,
  },
  headerTextContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 12,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  headerSubtext: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  iconContainer: {
    flex: 1,
  },
});

export default styles;
