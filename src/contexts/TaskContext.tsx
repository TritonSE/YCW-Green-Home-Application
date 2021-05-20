import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { CompletedTask, Task } from '../types';

interface TaskFilters {
  level: string;
  cost: string;
  category: string;
}

interface TaskState {
  isTaskCompletionRendered: boolean;
  selectedTask: Task;
  filters: TaskFilters;
  tasksCompleted: CompletedTask[];
  setIsTaskCompletionRendered: Dispatch<SetStateAction<boolean>> | (() => void);
  setSelectedTask: Dispatch<SetStateAction<Task>> | (() => void);
  setFilters: Dispatch<SetStateAction<TaskFilters>> | (() => void);
  setTasksCompleted: Dispatch<SetStateAction<CompletedTask[]>> | (() => void);
}

// default state
const initialSelectedTask: Task = {
  level: '',
  cost: '',
  category: '',
  title: '',
  question: '',
  rewardText: '',
};

const initialFilters: TaskFilters = {
  level: '',
  cost: '',
  category: '',
};

const initialTasksCompleted: CompletedTask[] = [
  {
    id: '',
    homeID: '',
    questionID: '',
    answer: '',
  },
];

const initialState: TaskState = {
  isTaskCompletionRendered: false,
  selectedTask: initialSelectedTask,
  filters: initialFilters,
  tasksCompleted: initialTasksCompleted,
  setIsTaskCompletionRendered: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setSelectedTask: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setFilters: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setTasksCompleted: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

// context and provider
export const TaskContext = createContext<TaskState>(initialState);
export const TaskProvider: React.FC = ({ children }) => {
  const [isTaskCompletionRendered, setIsTaskCompletionRendered] = useState(
    initialState.isTaskCompletionRendered,
  );
  const [selectedTask, setSelectedTask] = useState(initialState.selectedTask);
  const [filters, setFilters] = useState(initialState.filters);
  const [tasksCompleted, setTasksCompleted] = useState(
    initialState.tasksCompleted,
  );

  return (
    <TaskContext.Provider
      value={{
        isTaskCompletionRendered,
        selectedTask,
        filters,
        tasksCompleted,
        setIsTaskCompletionRendered,
        setSelectedTask,
        setFilters,
        setTasksCompleted,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
