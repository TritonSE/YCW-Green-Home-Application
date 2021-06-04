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
    marginVertical: '5%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  headerSubtext: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: '5%',
    marginTop: '2.5%',
  },
  iconContainer: {
    flex: 1,
    marginVertical: '5%',
  },
});

export default styles;
