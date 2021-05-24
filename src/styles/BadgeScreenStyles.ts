/* Styles for the Badge Screen pages (add more if needed) */
import { StyleSheet, TextStyle, ViewStyle, View } from 'react-native';

const styles = StyleSheet.create({
  // background green header that contains the title texts
  header: {
    height: 150,
    backgroundColor: '#86C5BE',
  },

  // text style for the "BADGE SCREEN" title
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 0,
  },

  // text style for explanation of page under titleText
  subTitleText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: '5%',
    marginRight: '5%',
  },

  // home page to fill the remainder of screen
  homePage: {
    height: '100%',
    width: '100%',
  },

  // for touchable opacity over starter, intermediate, guru
  button: {
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 25,
    height: 150,
  },

  // for badge level title (ex: "Starter" title)
  badgeLevelText: {
    color: 'black',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: 15,
  },

  // for "View All +"
  viewAllText: {
    color: 'black',
    fontSize: 12,
    marginRight: '5%',
    marginTop: 20,
  },
});

export default styles;
