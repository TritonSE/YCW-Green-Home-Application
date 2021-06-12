/* Styles for the Badge Screen pages (add more if needed) */
import { StyleSheet } from 'react-native';

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
    marginBottom: 10,
  },

  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    flex: 2,
  },

  badgeIcons: {
    marginLeft: 5,
    marginTop: 15,
    marginRight: 7.5,
    flexDirection: 'row',
  },

  bufferIcons: {
    marginLeft: 5,
    marginTop: 15,
    marginRight: 7.5,
    flexDirection: 'row',
    width: 75,
    height: 75,
    opacity: 0,
  },

  badgePreview: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
