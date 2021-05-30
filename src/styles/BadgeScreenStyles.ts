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

  // for "View All +"
  viewAllText: {
    color: 'black',
    fontSize: 12,
    marginRight: '5%',
    marginTop: 20,
  },

  // for badge level title (ex: "Starter" title)
  badgeLevelText: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },

  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 20,
    flex: 2,
  },

  badgeIcons: {
    marginLeft: 90,
    marginTop: 20,
    marginRight: 90,
  },
});

export default styles;
