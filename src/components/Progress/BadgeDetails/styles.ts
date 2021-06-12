import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  badgeDetailsContainer: {
    backgroundColor: '#86C5BE',
    flex: 1,
    alignItems: 'center',
  },
  badgePadding: {
    marginTop: '10%'
  },
  badgeTitleText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 30,
    marginTop: '10%',
    textAlign: 'center'
  },
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '20%'
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
    marginTop: '10%'
  },
  difficultyText: {
    backgroundColor: '#BFE3D5',
    borderRadius: 5,
    color: '#377067',
    overflow: 'hidden',
    padding: 5,
    marginTop: 10
  },
});

export default styles;
