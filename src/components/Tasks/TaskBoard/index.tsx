import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import TaskCard from '../TaskCard';
import { Task } from '../../../types/Tasks';
import { TaskContext } from '../../../contexts/TaskContext';

interface Props {
  tasks: Task[];
}

const TaskBoard: React.FC<Props> = ({ tasks }) => {
  const { filters } = useContext(TaskContext);
  const hasNoFilters = !(filters.level || filters.category || filters.cost);

  const filteredTasks = hasNoFilters
    ? tasks
    : tasks.filter(task => {
        if (filters.level && filters.level !== task.level) return false;
        if (filters.category && !task.categories.includes(filters.category))
          return false;
        if (filters.cost && filters.cost !== task.cost) return false;
        return true;
      });

  const taskComponents = filteredTasks.map(task => (
    <TaskCard
      key={task.id}
      id={task.id}
      level={task.level}
      title={task.title}
      rewardText={task.rewardText}
      cost={task.cost}
      categories={task.categories}
      questionText={task.questionText}
    />
  ));

  const populatedTaskBoard = (
    <View style={styles.populatedTaskBoard}>{taskComponents}</View>
  );
  const emptyTaskBoard = (
    <View style={styles.emptyTaskBoard}>
      <Text style={styles.emptyTaskText}>No Tasks Remaining!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {taskComponents.length > 0 ? populatedTaskBoard : emptyTaskBoard}
    </View>
  );
};

export default TaskBoard;
