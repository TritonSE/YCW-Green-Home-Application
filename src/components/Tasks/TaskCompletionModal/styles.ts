import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    zIndex: 10,
    elevation: 10,
    height: 200,
  },
  badgeIcon: {
    position: 'absolute',
    left: 70,
    top: 170,
    marginBottom: 20,
    borderWidth: 15,
    borderRadius: 70,
    borderColor: '#FAFAFA',
  },
  closeIcon: {
    position: 'absolute',
    right: 30,
    top: 220,
  },
  bodyContainer: {
    paddingLeft: 36,
  },
  statsContainer: {
    marginTop: 80,
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
    zIndex: 20,
    elevation: 20,
  },
  dropdown: {
    width: 100,
    height: 43,
    backgroundColor: 'white',
  },
  itemList: {
    justifyContent: 'flex-start',
    paddingLeft: 5,
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
  buttonDisabled: {
    backgroundColor: 'rgba(233, 102, 97, 0.75)',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
