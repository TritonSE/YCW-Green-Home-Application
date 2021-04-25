import React from 'react';
import { StyleSheet, View } from 'react-native';

import TaskCard from './TaskCard';

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];

// type TaskBoardProps = {
//   level: string;
//   tasks: Array<TaskCard>;
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

const TaskBoard: React.FC = () => {
  return (
    <View style={styles.container}>
      <TaskCard
        level="Starter"
        title="Ceiling Fans"
        rewardText="Completed ENERGY STAR® ceiling fans in the living areas and bedrooms"
        cost="$"
        category="Energy"
        question="Does the home have ENERGY STAR® ceiling fans in the living areas and bedrooms?"
      />
      <TaskCard
        level="Starter"
        title="Refrigerator"
        rewardText="Completed ENERGY STAR® certified refrigerator, less than 25 cubic feet in size, and less than 2 years old. Multiple appliances must still total less than 25 cubic feet to qualify."
        cost="$$$"
        category="Energy"
        question="Is the refrigerator ENERGY STAR® certified, less than 25 cubic feet in size, and less than 2 years old?"
      />
    </View>
  );
};

export default TaskBoard;
