import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TITLE = 'TASKS';
const SUBTITLE = 'Receive more badges by completing new tasks';

/*
enum LEVEL {
  beginner = "Beginner",
  intermediate = "Intermediate",
  guru = "Guru",
}
enum CATEGORY {
  tbd = "abc",
  tbd1 = "abc",
  tbd2 = "abc",
}
enum COST {
  low = "$",
  medium = "$$",
  high = "$$$",
} */

/*
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#86C5BE",
    // paddingTop: Platform.OS === "ios" ? 68 : 40,
    position: "absolute",
    width: "375px",
    height: "184px",
    left: "0px",
    top: "0px",
    alignItems: "flex-end",
  },
  title: {
    color: "#FFFF",
    alignSelf: "center",
    marginTop: "-10%",
    height: "33pt",
    width: "234px",
    left: "69px",
    top: "57px",
    fontFamily: "Lato",
  },
  subtitle: {
    color: "#FFFF",
    position: "absolute",
  },
});
 */

const TaskHeader = () => {
  return (
    <>
      <View>
        <Text>{TITLE}</Text>
      </View>
      <View>
        <Text>{SUBTITLE}</Text>
      </View>
    </>
  );
};

export default TaskHeader;
