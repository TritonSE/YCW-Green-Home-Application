import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomSheetContainer: {
    zIndex: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modal: {
    backgroundColor: '#FAFAFA',
    minHeight: 450,
    borderColor: '#ddd',
    borderWidth: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  badgeIcon: {
    marginLeft: 60,
    marginTop: -30,
    borderWidth: 8,
    borderRadius: 70,
    borderColor: '#FAFAFA',
  },
  closeIcon: {
    flexDirection: 'row-reverse',
    marginLeft: 30,
    marginTop: 20,
  },
  bodyContainer: {
    paddingLeft: 36,
  },
  statsContainer: {
    marginTop: 30,
  },
  statsText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  questionContainer: {
    marginTop: 30,
    marginRight: 31,
  },
  questionText: {
    fontSize: 18,
  },
  dropdownContainer: {
    marginTop: 30,
    zIndex: 10,
    elevation: 10,
  },
  dropdown: {
    width: 100,
    height: 43,
    backgroundColor: 'white',
  },
  dropdownList: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    alignItems: 'center',
    zIndex: 1,
    elevation: 1,
  },
  button: {
    backgroundColor: 'rgba(233, 102, 97, 1)',
    marginTop: 30,
    width: 300,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
