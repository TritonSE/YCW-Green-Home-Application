import React from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';

import TaskCard from './TaskCard';

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];

type TaskBoardProps = {
  level: string;
  tasks: Array<TaskCard>;
};

const TaskBoard = () => (
  <View>
    {tasks.map(task => {
      return (
        <View key={task}>
          <Text>{task}</Text>
        </View>
      );
    })}
  </View>
);

export default TaskBoard;
