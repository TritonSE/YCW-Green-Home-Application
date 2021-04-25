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

interface TaskState {
  isTaskCompletionRendered: boolean;
  selectedTask: TaskData;
  setIsTaskCompletionRendered: Dispatch<SetStateAction<boolean>> | (() => void);
  setSelectedTask: Dispatch<SetStateAction<TaskData>> | (() => void);
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

const initialState: TaskState = {
  isTaskCompletionRendered: false,
  selectedTask: initialSelectedTask,
  setIsTaskCompletionRendered: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setSelectedTask: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

// context and provider
export const TaskContext = createContext<TaskState>(initialState);
export const TaskProvider: React.FC = ({ children }) => {
  const [isTaskCompletionRendered, setIsTaskCompletionRendered] = useState(
    initialState.isTaskCompletionRendered,
  );
  const [selectedTask, setSelectedTask] = useState(initialState.selectedTask);

  return (
    <TaskContext.Provider
      value={{
        isTaskCompletionRendered,
        selectedTask,
        setIsTaskCompletionRendered,
        setSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
