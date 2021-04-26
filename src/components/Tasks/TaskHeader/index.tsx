import React from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
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

const HEADER_TITLE = 'TASKS';
const HEADER_SUBTITLE = 'Receive more badges by completing new tasks';

const TaskHeader = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{HEADER_TITLE}</Text>
        <Text style={styles.subtitle}>{HEADER_SUBTITLE}</Text>

        <View style={styles.dropdownWrapper}>
          <DropDownPicker
            items={[
              { label: 'LEVEL', value: '', selected: true },
              { label: 'Starter', value: 'STARTER' },
              { label: 'Intermediate', value: 'INTERMEDIATE' },
              { label: 'Guru', value: 'GURU' },
            ]}
            containerStyle={styles.dropdownContainer}
            labelStyle={styles.dropdownLabel}
            style={styles.dropdownBox}
            showArrow
            onChangeItem={item => console.log(item.label, item.value)}
          />
          <DropDownPicker
            items={[
              { label: 'CATEGORY', value: '', selected: true },
              { label: 'Energy', value: 'ENERGY' },
              { label: 'Resiliency', value: 'RESILIENCY' },
              { label: 'Water', value: 'WATER' },
              { label: 'Health', value: 'Health' },
            ]}
            containerStyle={styles.dropdownContainer}
            labelStyle={styles.dropdownLabel}
            style={styles.dropdownBox}
            showArrow
            onChangeItem={item => console.log(item.label, item.value)}
          />
          <DropDownPicker
            items={[
              { label: 'COST', value: '', selected: true },
              { label: '$', value: 'ONE' },
              { label: '$$', value: 'TWO' },
              { label: '$$', value: 'THREE' },
            ]}
            containerStyle={styles.dropdownContainer}
            labelStyle={styles.dropdownLabel}
            style={styles.dropdownBox}
            showArrow
            onChangeItem={item => console.log(item.label, item.value)}
          />
        </View>
      </View>
    </View>
  );
};

export default TaskHeader;
