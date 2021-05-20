import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';
import { TaskProvider, initialSelectedTask } from '../contexts/TaskContext';
import { TaskScreen } from '../screens';
import { Task } from '../types';

const TaskContainer = () => {
  const { questionState } = useContext(QuestionContext);
  const { responseState } = useContext(ResponseContext);

  const questionMap = new Map(
    questionState.items.map(question => [question.id, question]),
  );
  const questionsNotAnswered: Task[] = responseState.items
    .filter(response => !questionMap.has(response.questionID))
    .map(
      response => questionMap.get(response.questionID) || initialSelectedTask,
    );

  return (
    <TaskProvider>
      <TaskScreen tasks={questionsNotAnswered} />
    </TaskProvider>
  );
};

export default TaskContainer;
