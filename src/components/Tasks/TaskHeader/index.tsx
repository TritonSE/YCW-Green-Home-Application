import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TaskContext } from '../../../contexts/TaskContext';
import styles from './styles';

const HEADER_TITLE = 'TASKS';
const HEADER_SUBTITLE = 'Receive more badges by completing new tasks';

const TaskHeader = () => {
  const { filters, setFilters } = useContext(TaskContext);

  const updateFilters = (filter: string, value: string) => {
    console.log(`${filter}: ${value}`);
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

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
            itemStyle={styles.dropdownItem}
            style={styles.dropdownBox}
            showArrow
            onChangeItem={item => updateFilters('level', item.value)}
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
            itemStyle={styles.dropdownItem}
            style={styles.dropdownBox}
            showArrow
            onChangeItem={item => updateFilters('category', item.value)}
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
            itemStyle={styles.dropdownItem}
            style={styles.dropdownBox}
            showArrow
            onChangeItem={item => updateFilters('cost', item.value)}
          />
        </View>
      </View>
    </View>
  );
};

export default TaskHeader;
