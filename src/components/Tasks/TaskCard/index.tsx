import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TaskContext } from '../../../contexts/TaskContext';
import SvgContainer from '../../SvgContainer';
import { Task } from '../../../types';
import styles from './styles';
import { CostTextToSymbol } from '../../../utils';

const TaskCard: React.FC<Task> = ({
  level,
  title,
  question,
  category,
  cost,
  rewardText,
}) => {
  const { setIsTaskCompletionRendered, setSelectedTask } = useContext(
    TaskContext,
  );

  const selectCurrentTask = () => {
    setSelectedTask({
      level,
      title,
      question,
      category,
      cost,
      rewardText,
    });
    setIsTaskCompletionRendered(true);
  };

  return (
    <TouchableOpacity onPress={selectCurrentTask}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.title}>
            <Text adjustsFontSizeToFit style={styles.titleText}>
              {title}
            </Text>
          </View>
          <View style={styles.icon}>
            <SvgContainer badgeTitle={title} height="40" width="40" />
          </View>
        </View>
        <View style={styles.cost}>
          <Text>{CostTextToSymbol[cost]}</Text>
        </View>
        <View style={styles.question}>
          <Text style={styles.questionText}>{question}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
