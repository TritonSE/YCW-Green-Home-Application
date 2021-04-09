const borderColor = '#8D8D8D';
const inputTextColor = '#000000';
const buttonColor = '#E96661';
const disabledButtonColor = '#E9666180';

const theme = {
  sectionHeader: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 52,
    paddingTop: 20,
  },
  input: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    color: inputTextColor,
  },
  button: {
    width: 136,
    left: '30%',
    borderRadius: 20,
    backgroundColor: buttonColor,
    alignItems: 'center',
    padding: 12,
  },
  buttonDisabled: {
    width: 136,
    left: '30%',
    borderRadius: 20,
    backgroundColor: disabledButtonColor,
    alignItems: 'center',
    padding: 12,
  },
  sectionFooterLink: {
    fontSize: 14,
    color: buttonColor,
    alignItems: 'baseline',
    textAlign: 'center',
  },
};

export default theme;
