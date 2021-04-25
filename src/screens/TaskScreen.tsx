import React, { useContext } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import TaskHeader from '../components/Tasks/TaskHeader';
import TaskBoard from '../components/Tasks/TaskBoard';
import TaskCompletionModal from '../components/Tasks/TaskCompletionModal';
import { TaskContext } from '../contexts/TaskContext';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgb(250,250,250)',
  },
  header: {
    zIndex: 10,
    elevation: 10,
  },
});

const TaskScreen = () => {
  const { isTaskCompletionRendered } = useContext(TaskContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TaskHeader />
      </View>
      <TaskBoard />
      {isTaskCompletionRendered && <TaskCompletionModal />}
    </ScrollView>
  );
};

export default TaskScreen;
