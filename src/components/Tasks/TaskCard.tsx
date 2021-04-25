import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TaskContext } from '../../contexts/TaskContext';
import SvgContainer from '../SvgContainer';

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 180,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingLeft: 10,
  },
  cardHeader: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 15,
  },
  title: {
    alignItems: 'flex-start',
  },
  titleText: {
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 16,
    maxWidth: 75,
    color: '#353935',
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 30,
    alignItems: 'flex-end',
  },
  cost: {
    justifyContent: 'flex-start',
  },
  question: {
    marginTop: 10,
  },
  questionText: {
    width: 125,
    fontSize: 12,
  },
});

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
