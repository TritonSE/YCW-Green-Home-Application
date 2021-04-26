import React, { useContext } from 'react';
import { View } from 'react-native';
import styles from './styles';
import TaskCard from '../TaskCard';
import { Task } from '../../../types/Tasks';
import { TaskContext } from '../../../contexts/TaskContext';

interface Props {
  tasks: Task[];
}

const TaskBoard: React.FC<Props> = ({ tasks }) => {
  const { filters } = useContext(TaskContext);

  const taskComponents = tasks
    .filter(task => {
      const hasNoFilters = !(filters.level || filters.category || filters.cost);
      if (hasNoFilters) return true;
      if (filters.level && filters.level !== task.level) return false;
      if (filters.category && filters.category !== task.category) return false;
      if (filters.cost && filters.cost !== task.cost) return false;
      return true;
    })
    .map(task => (
      <TaskCard
        key={task.title} // TODO: use id when connected to backend
        level={task.level}
        title={task.title}
        rewardText={task.rewardText}
        cost={task.cost}
        category={task.category}
        question={task.question}
      />
    ));

  return <View style={styles.container}>{taskComponents}</View>;
};

export default TaskBoard;
