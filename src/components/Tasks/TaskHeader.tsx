import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
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
    flexDirection: 'column',
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

        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <DropDownPicker
            items={[
              { label: 'Hello', value: 'item1' },
              { label: 'Item 2', value: 'item2', selected: true },
            ]}
            containerStyle={{ width: 98, height: 28 }}
            onChangeItem={item => console.log(item.label, item.value)}
          />
          <DropDownPicker
            items={[
              { label: 'Item 1', value: 'item1' },
              { label: 'Item 2', value: 'item2' },
            ]}
            containerStyle={{ width: 98, height: 28 }}
            onChangeItem={item => console.log(item.label, item.value)}
          />
          <DropDownPicker
            items={[
              { label: 'Item 1', value: 'item1' },
              { label: 'Item 2', value: 'item2' },
            ]}
            containerStyle={{ width: 98, height: 28 }}
            onChangeItem={item => console.log(item.label, item.value)}
          />
        </View>
      </View>
    </View>
  );
};

export default TaskHeader;
