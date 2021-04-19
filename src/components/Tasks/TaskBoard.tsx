import React from 'react';
import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import badgeXMLs from '../../assets/badges/titleToXML';

import TaskCard from './TaskCard';

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];

// type TaskBoardProps = {
//   level: string;
//   tasks: Array<TaskCard>;
// };

const TaskBoard = () => (
  <View>
    <TaskCard
      level="Starter"
      title="Ceiling Fans"
      completed={false}
      cost="$"
      environmentalBenefits={['Energy']}
      question="Does the home have ENERGY STAR ceiling fans in the living areas and bedrooms?"
    />
  </View>
);

export default TaskBoard;
