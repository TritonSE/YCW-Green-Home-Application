import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import API from '@aws-amplify/api';

import { BadgeScreen, ProfileScreen } from '../screens/index';
import { customListQuestions, customResponses } from '../customQueries';
import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';
import { UserContext } from '../contexts/UserContext';
import TaskContainer from './TaskContainer';
import HomeContainer from './HomeContainer';

const Tab = createBottomTabNavigator();

const NavRoutes = {
  HOME: 'Home',
  TASKS: 'Tasks',
  PROGRESS: 'Progress',
  ME: 'Me',
};
const NavRoutesToIcon = {
  [NavRoutes.HOME]: 'ios-home',
  [NavRoutes.TASKS]: 'ios-list',
  [NavRoutes.PROGRESS]: 'ios-clipboard',
  [NavRoutes.ME]: 'ios-person',
};

export default function NavFlow() {
  const { setQuestionState } = useContext(QuestionContext);
  const { setResponseState } = useContext(ResponseContext);
  const { userState, currentHome } = useContext(UserContext);
  useEffect(() => {
    const getQuestionsAndResponses = async () => {
      const result: any = await API.graphql({
        query: customListQuestions,
      });
      setQuestionState({ items: result.data.listQuestions.items });

      const responses: any = await API.graphql({
        query: customResponses,
        variables: {
          filter: { homeID: userState.homes.items[currentHome].home.id },
        },
      });

      if (responses.data.listResponses.items.length !== 0) {
        setResponseState({ items: responses.data.listResponses.items });
      }
    };
    getQuestionsAndResponses();
  }, [setQuestionState, setResponseState, userState, currentHome]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = NavRoutesToIcon[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E96661',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={NavRoutes.HOME} component={HomeContainer} />
      <Tab.Screen name={NavRoutes.TASKS} component={TaskContainer} />
      <Tab.Screen name={NavRoutes.PROGRESS} component={BadgeScreen} />
      <Tab.Screen name={NavRoutes.ME} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
