import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';
import { TaskProvider, initialSelectedTask } from '../contexts/TaskContext';
import { TaskScreen } from '../screens';
import { Task } from '../types';

const TaskContainer = () => {
  const { questionState } = useContext(QuestionContext);
  const { responseState } = useContext(ResponseContext);

  const responseMap = new Map(
    responseState.items.map(response => [response.questionID, response]),
  );
  const questionsNotAnswered: Task[] = questionState.items.filter(
    question => !responseMap.has(question.id),
  );

  return (
    <TaskProvider>
      <TaskScreen tasks={questionsNotAnswered} />
    </TaskProvider>
  );
};

export default TaskContainer;
