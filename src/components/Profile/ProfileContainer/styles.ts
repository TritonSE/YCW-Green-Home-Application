import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
  image: {
    borderRadius: 60,
    height: 70,
    marginTop: 80,
    marginBottom: 15,
    width: 70,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  bio: {
    color: 'white',
    fontSize: 13.5,
    textAlign: 'center',
  },
});

export default styles;
