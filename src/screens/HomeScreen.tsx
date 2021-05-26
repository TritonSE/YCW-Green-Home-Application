/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import SvgContainer from '../components/SvgContainer';
import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';

export const HomeScreen = () => {
  const { questionState } = useContext(QuestionContext);
  const { responseState } = useContext(ResponseContext);

  const positiveResponse = responseState.items.filter(
    response => response.answer === 'Yes',
  );

  const sortedResponses = positiveResponse.sort((a, b) => {
    const date1 = new Date(a.createdAt);
    const date2 = new Date(b.createdAt);
    if (date1 > date2) {
      return -1;
    }
    return 1;
  });

  const badgesList = sortedResponses.map(response => {
    const questionObject = questionState.items.find(
      question => question.id === response.questionID,
    );
    return questionObject?.title;
  });

  const completedTextList = sortedResponses.map(response => {
    const questionObject = questionState.items.find(
      question => question.id === response.questionID,
    );
    return questionObject?.rewardText;
  });

  return (
    <View>
      {badgesList.map(badge => {
        if (badge !== undefined) {
          return <SvgContainer badgeTitle={badge} height="40" width="40" />;
        }
        return <Text>No Badge Found</Text>;
      })}
      {completedTextList.map(text => {
        if (text !== undefined) {
          return <Text>{text}</Text>;
        }
        return <Text>No Badge Found</Text>;
      })}
    </View>
  );
};
