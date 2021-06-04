import { StyleSheet } from 'react-native';
import colors from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
  },
  populatedTaskBoard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: 184,
  },
  emptyTaskBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteSecondary,
  },
  emptyTaskText: {
    fontSize: 20,
    marginTop: 100,
  },
});

export default styles;
