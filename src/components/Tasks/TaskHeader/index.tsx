import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-no-proptypes';
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

  const options = {
    levels: [
      { label: 'All', value: '' },
      { label: 'Starter', value: 'STARTER' },
      { label: 'Intermediate', value: 'INTERMEDIATE' },
      { label: 'Guru', value: 'GURU' },
    ],
    categories: [
      { label: 'All', value: '' },
      { label: 'Energy', value: 'ENERGY' },
      { label: 'Resiliency', value: 'RESILIENCY' },
      { label: 'Water', value: 'WATER' },
      { label: 'Health', value: 'Health' },
    ],
    costs: [
      { label: 'All', value: '' },
      { label: '$', value: 'ONE' },
      { label: '$$', value: 'TWO' },
      { label: '$$$', value: 'THREE' },
    ],
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{HEADER_TITLE}</Text>
      <Text style={styles.subtitle}>{HEADER_SUBTITLE}</Text>

      <View style={styles.dropdownWrapper}>
        <Dropdown
          value="All"
          itemColor="rgba(0, 0, 0, .54)"
          label="Level"
          data={options.levels}
          onChangeText={value => updateFilters('level', value)}
          itemCount={options.levels.length}
          containerStyle={styles.dropdownContainer}
          useNativeDriver
          underlineColor="transparent"
        />
        <Dropdown
          value="All"
          itemColor="rgba(0, 0, 0, .54)"
          label="Category"
          data={options.categories}
          onChangeText={value => updateFilters('category', value)}
          containerStyle={styles.dropdownContainer}
          itemCount={options.categories.length}
          useNativeDriver
          underlineColor="transparent"
        />
        <Dropdown
          value="All"
          itemColor="rgba(0, 0, 0, .54)"
          label="Cost"
          data={options.costs}
          onChangeText={value => updateFilters('cost', value)}
          containerStyle={styles.dropdownContainer}
          itemCount={options.costs.length}
          useNativeDriver
          underlineColor="transparent"
        />
      </View>
    </View>
  );
};

export default TaskHeader;
