import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 180,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingLeft: 10,
  },
  cardHeader: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 15,
  },
  title: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleText: {
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#353935',
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 10,
    alignItems: 'flex-end',
  },
  cost: {
    justifyContent: 'flex-start',
    fontStyle: 'italic',
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
