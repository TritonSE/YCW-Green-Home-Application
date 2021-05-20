import API from '@aws-amplify/api';
import React, { useContext, useEffect } from 'react';
import { TaskProvider } from '../contexts/TaskContext';
import { UserContext } from '../contexts/UserContext';
import { listResponses } from '../graphql/queries';
import { TaskScreen } from '../screens';

const TaskContainer = () => {
  const { userState } = useContext(UserContext);

  useEffect(() => {
    const getResponses = async () => {
      const result: any = await API.graphql({
        query: listResponses,
        variables: { homeID: 'bet' },
      });
    };
  }, []);

  return (
    <TaskProvider>
      <TaskScreen />
    </TaskProvider>
  );
};

export default TaskContainer;
