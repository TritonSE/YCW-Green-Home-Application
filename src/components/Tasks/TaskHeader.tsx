import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

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

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#86C5BE',
    paddingTop: Platform.OS === 'ios' ? 68 : 40,
    height: 184,
    left: 0,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 33,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

const TITLE = 'TASKS';
const SUBTITLE = 'Receive more badges by completing new tasks';

const TaskHeader = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{TITLE}</Text>
        <Text style={styles.subtitle}>{SUBTITLE}</Text>
      </View>
    </View>
  );
};

export default TaskHeader;
