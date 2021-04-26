import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TaskContext } from '../../../contexts/TaskContext';
import SvgContainer from '../../SvgContainer';
import styles from './styles';

interface Props {
  level: string;
  title: string;
  question: string;
  category: string;
  cost: string;
  rewardText: string;
}

const TaskCard: React.FC<Props> = ({
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
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.icon}>
            <SvgContainer badgeTitle={title} height="40" width="40" />
          </View>
        </View>
        <View style={styles.cost}>
          <Text>{cost}</Text>
        </View>
        <View style={styles.question}>
          <Text style={styles.questionText}>{question}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
