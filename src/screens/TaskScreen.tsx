import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import TaskHeader from '../components/Tasks/TaskHeader';
import TaskBoard from '../components/Tasks/TaskBoard';
import TaskCompletionModal from '../components/Tasks/TaskCompletionModal';
import { TaskContext } from '../contexts/TaskContext';
import styles from '../styles/TaskScreenStyles';

const TaskScreen = () => {
  const { isTaskCompletionRendered } = useContext(TaskContext);

  const tasks = [
    {
      level: 'STARTER',
      title: 'Ceiling Fans',
      rewardText:
        'Completed ENERGY STAR® ceiling fans in the living areas and bedrooms',
      cost: 'ONE',
      category: 'ENERGY',
      question:
        'Does the home have ENERGY STAR® ceiling fans in the living areas and bedrooms?',
    },
    {
      level: 'STARTER',
      title: 'Refrigerator',
      rewardText:
        'Completed ENERGY STAR® certified refrigerator, less than 25 cubic feet in size, and less than 2 years old. Multiple appliances must still total less than 25 cubic feet to qualify.',
      cost: 'THREE',
      category: 'ENERGY',
      question:
        'Is the refrigerator ENERGY STAR® certified, less than 25 cubic feet in size, and less than 2 years old?',
    },
    {
      level: 'STARTER',
      title: 'LED Lights',
      rewardText: 'Completed LED lights',
      cost: 'TWO',
      category: 'ENERGY',
      question: 'Are all of the lights LED?',
    },
    {
      level: 'INTERMEDIATE',
      title: 'Shortened Shower',
      rewardText: 'Successfully shortened showers',
      cost: 'ONE',
      category: 'WATER',
      question: 'Have you shortened the amount of time you take for a shower?',
    },
    {
      level: 'INTERMEDIATE',
      title: 'Air Sealed Home',
      rewardText: 'Completed Air Sealed Home',
      cost: 'TWO',
      category: 'RESILIENCY',
      question: 'Has the home been air sealed?',
    },
    {
      level: 'ADVANCED',
      title: 'Energy Audit',
      rewardText: 'Completed an energy audit',
      cost: 'THREE',
      category: 'ENERGY',
      question: 'Has the home completed an energy audit?',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TaskHeader />
      </View>
      <TaskBoard tasks={tasks} />
      {isTaskCompletionRendered && <TaskCompletionModal />}
    </ScrollView>
  );
};

export default TaskScreen;
