import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';
import { UserResponseContext } from '../contexts/UserResponseContext';
import { UserContext } from '../contexts/UserContext';
import { TaskProvider, initialSelectedTask } from '../contexts/TaskContext';
import { TaskScreen } from '../screens';
import { Task } from '../types';

const TaskContainer = () => {
  const { questionState } = useContext(QuestionContext);
  const { responseState } = useContext(ResponseContext);
  const { userResponseState } = useContext(UserResponseContext);
  const { userState, currentHome } = useContext(UserContext);

  // TODO: print user specific tasks
  // currently question state has all questions, and bottom chunk of code is filtering
  // out questions if there is a response for the selected home
  // this means that all questions  (including user questions) are not filtered out in
  // bottom chunk of code. so to print user specific question, we need to somehow deal with that

  // Print home specific tasks
  const currhomeId = userState.homes.items[currentHome].home.id;

  // filter responseState to take out any response not associated with current home
  const newResponseState = responseState.items.filter(
    response => response.homeID === currhomeId,
  );

  const responseMap = new Map(
    newResponseState.map(response => [response.questionID, response]),
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
