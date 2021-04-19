import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import TaskHeader from './TaskHeader';
import TaskBoard from './TaskBoard';
import TaskCompletionModal from './TaskCompletionModal';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "rgb(250,250,250)"
  }
})

const TaskScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TaskHeader />
      <TaskBoard />
      {/* <TaskCompletionModal
        level="STARTER"
        category="ENERGY"
        cost="ONE"
        question="Does the home have ENERGY STAR ceiling fans in the living areas and bedrooms?"
      /> */}
    </ScrollView>
  );
};

export default TaskScreen;
