import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

// types for local state
interface TaskData {
  level: string;
  cost: string;
  category: string;
  title: string;
  question: string;
  rewardText: string;
}

interface TaskFilters {
  level: string;
  cost: string;
  category: string;
}

interface TaskState {
  isTaskCompletionRendered: boolean;
  selectedTask: TaskData;
  filters: TaskFilters;
  setIsTaskCompletionRendered: Dispatch<SetStateAction<boolean>> | (() => void);
  setSelectedTask: Dispatch<SetStateAction<TaskData>> | (() => void);
  setFilters: Dispatch<SetStateAction<TaskFilters>> | (() => void);
}

// default state
const initialSelectedTask: TaskData = {
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

const initialState: TaskState = {
  isTaskCompletionRendered: false,
  selectedTask: initialSelectedTask,
  filters: initialFilters,
  setIsTaskCompletionRendered: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setSelectedTask: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setFilters: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

// context and provider
export const TaskContext = createContext<TaskState>(initialState);
export const TaskProvider: React.FC = ({ children }) => {
  const [isTaskCompletionRendered, setIsTaskCompletionRendered] = useState(
    initialState.isTaskCompletionRendered,
  );
  const [selectedTask, setSelectedTask] = useState(initialState.selectedTask);
  const [filters, setFilters] = useState(initialState.filters);

  return (
    <TaskContext.Provider
      value={{
        isTaskCompletionRendered,
        selectedTask,
        filters,
        setIsTaskCompletionRendered,
        setSelectedTask,
        setFilters,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
