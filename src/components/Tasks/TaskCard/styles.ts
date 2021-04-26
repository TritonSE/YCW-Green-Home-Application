import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 180,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingLeft: 10,
  },
  cardHeader: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 15,
  },
  title: {
    alignItems: 'flex-start',
  },
  titleText: {
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 16,
    maxWidth: 75,
    color: '#353935',
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 30,
    alignItems: 'flex-end',
  },
  cost: {
    justifyContent: 'flex-start',
  },
  question: {
    marginTop: 10,
  },
  questionText: {
    width: 125,
    fontSize: 12,
  },
});

export default styles;
