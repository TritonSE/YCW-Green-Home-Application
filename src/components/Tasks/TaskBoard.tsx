// external imports
import React from 'react';
import { Text, View } from 'react-native';

// internal imports

const tasks = ['task', 'task', 'task', 'task', 'task'];

const TaskBoard = () => (
  <View>
    {tasks.map(task => {
      return <Text>{task}</Text>;
    })}
  </View>
);

export default TaskBoard;
