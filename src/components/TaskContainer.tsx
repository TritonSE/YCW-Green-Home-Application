import React from 'react';
import { TaskProvider } from '../contexts/TaskContext';
import { TaskScreen } from '../screens';

const TaskContainer = () => (
  <TaskProvider>
    <TaskScreen />
  </TaskProvider>
);

export default TaskContainer;
