import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import TaskHeader from '../components/Tasks/TaskHeader';
import TaskBoard from '../components/Tasks/TaskBoard';
import TaskCompletionModal from '../components/Tasks/TaskCompletionModal';
import { TaskContext } from '../contexts/TaskContext';
import styles from '../styles/TaskScreenStyles';
import { Task } from '../types';

interface Props {
  tasks: Task[];
}

const TaskScreen: React.FC<Props> = ({ tasks }) => {
  const { isTaskCompletionRendered } = useContext(TaskContext);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <TaskHeader />
        <ScrollView contentContainerStyle={styles.container}>
          <TaskBoard tasks={tasks} />
          {isTaskCompletionRendered && <TaskCompletionModal />}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TaskScreen;
