import { StyleSheet } from 'react-native';
import colors from '../common/colors';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.whiteSecondary,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    zIndex: 10,
    elevation: 10,
  },
});

export default styles;
