import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import toProperCase from '../../../utils';
import { TaskContext } from '../../../contexts/TaskContext';
import styles from './styles';

const CostTextToSymbol: { [key: string]: string } = {
  ONE: '$',
  TWO: '$$',
  THREE: '$$$',
};

const TaskCompletionModal: React.FC = () => {
  const { selectedTask, setIsTaskCompletionRendered } = useContext(TaskContext);
  const { level, category, cost, question } = selectedTask;

  const completeCurrentTask = () => {
    // TODO: implement rest
    setIsTaskCompletionRendered(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>Level: {toProperCase(level)}</Text>
          <Text style={styles.statsText}>
            Category: {toProperCase(category)}
          </Text>
          <Text style={styles.statsText}>Cost: {CostTextToSymbol[cost]}</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            items={[
              { label: 'No', value: 'no', selected: true },
              { label: 'Yes', value: 'yes' },
            ]}
            containerStyle={styles.dropdown}
            dropDownStyle={styles.dropdownList}
            showArrow
            onChangeItem={item => console.log(item.label, item.value)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={completeCurrentTask}>
            <Text style={styles.buttonText}>Task Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskCompletionModal;
