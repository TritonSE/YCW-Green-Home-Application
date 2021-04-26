import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modal: {
    height: 375,
    borderColor: '#ddd',
    borderWidth: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingLeft: 36,
  },
  statsContainer: {
    marginTop: 50,
  },
  statsText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  questionContainer: {
    marginTop: 20,
    marginRight: 31,
  },
  questionText: {
    fontSize: 16,
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
