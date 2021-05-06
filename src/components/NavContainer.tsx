import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import API from '@aws-amplify/api';
import {
  HomeScreen,
  TaskScreen,
  BadgeScreen,
  ProfileScreen,
} from '../screens/index';
import { customListQuestions } from '../customQueries';
import { QuestionContext } from '../contexts/QuestionsContext';

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
  useEffect(() => {
    const getQuestions = async () => {
      const result: any = await API.graphql({
        query: customListQuestions,
      });
      setQuestionState({ items: result.data.listQuestions.items });
    };
    getQuestions();
  }, [setQuestionState]);
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
      <Tab.Screen name={NavRoutes.HOME} component={HomeScreen} />
      <Tab.Screen name={NavRoutes.TASKS} component={TaskScreen} />
      <Tab.Screen name={NavRoutes.PROGRESS} component={BadgeScreen} />
      <Tab.Screen name={NavRoutes.ME} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
