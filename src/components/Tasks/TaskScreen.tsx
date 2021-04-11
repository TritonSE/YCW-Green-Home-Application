import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import TaskHeader from './TaskHeader';
import TaskBoard from './TaskBoard';

const TaskScreen = () => {
  return (
    <ScrollView>
      <TaskHeader />
      <TaskBoard />
    </ScrollView>
  );
};

export default TaskScreen;
