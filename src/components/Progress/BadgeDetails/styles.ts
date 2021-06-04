import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  badgeDetailsContainer: {
    backgroundColor: '#86C5BE',
    flex: 1,
    alignItems: 'center',
  },
  badgeTitleText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonPadding: {
    width: 20,
  },
  buttonText: {
    backgroundColor: '#E96661',
    borderRadius: 12,
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    margin: 5,
    overflow: 'hidden',
    paddingHorizontal: 29,
    paddingVertical: 5,
  },
  dateEarnedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  difficultyText: {
    backgroundColor: '#BFE3D5',
    borderRadius: 5,
    color: '#377067',
    overflow: 'hidden',
    padding: 5,
  },
});

export default styles;
