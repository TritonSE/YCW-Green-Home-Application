import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TaskCard from '../TaskCard';

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
      <TaskCard
        level="Starter"
        title="LED Lights"
        rewardText="Completed LED lights"
        cost="$$"
        category="Energy"
        question="Are all of the lights LED?"
      />
      <TaskCard
        level="Starter"
        title="Shortened Shower"
        rewardText="Successfully shortened showers"
        cost="$"
        category="Water"
        question="Have you shortened the amount of time you take for a shower?"
      />
    </View>
  );
};

export default TaskBoard;
