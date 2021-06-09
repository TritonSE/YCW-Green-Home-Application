import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modal: {
    backgroundColor: '#FAFAFA',
    minHeight: '73%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
    height: 200,
  },
  badgeIcon: {
    position: 'absolute',
    left: 70,
    zIndex: 20,
    marginTop: 170,
    borderWidth: 15,
    borderRadius: 70,
    borderColor: '#FAFAFA',
  },
  closeIcon: {
    flex: 1,
    flexGrow: 1,
    paddingLeft: '83%',
    marginTop: 30,
  },
  bodyContainer: {
    paddingLeft: 36,
  },
  statsContainer: {
    paddingTop: -210,
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
    width: 300,
  },
  dropdown: {
    width: 100,
    height: 43,
    backgroundColor: 'white',
    zIndex: 20,
  },
  itemList: {
    justifyContent: 'flex-start',
    paddingLeft: 5,
  },

  /*
  buttonContainer: {
    alignItems: "center",
    paddingTop: 50,
    //backgroundColor: "red",
    paddingBottom: 50,
  },
  */

  button: {
    marginTop: '23%',
    alignSelf: 'center',
    width: 300,
    height: 50,
    marginBottom: 45,
    borderRadius: 30,
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(233, 102, 97, 0.6)',
  },
  buttonEnabled: {
    backgroundColor: 'rgba(233, 102, 97, 1)',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});

export default styles;
