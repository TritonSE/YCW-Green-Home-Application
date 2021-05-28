/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { View } from 'react-native';

import HomeHeader from '../components/Home/HomeHeader';
import { HomeRecentActivity } from '../components/Home/HomeRecentActivity';
import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';
import styles from '../styles/HomeScreenStyles';
import { Home } from '../models';

export interface BadgeTitleRewardText {
  badgeTitle: string;
  rewardText: string;
}

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

  const badgeCompletedTextList: (BadgeTitleRewardText | undefined)[] =
    sortedResponses.map(response => {
      const questionObject = questionState.items.find(
        question => question.id === response.questionID,
      );

      if (questionObject === null || questionObject === undefined) {
        return undefined;
      }

      const badgeCompletedTextObj: BadgeTitleRewardText = {
        badgeTitle: questionObject.title,
        rewardText: questionObject.rewardText,
      };

      return badgeCompletedTextObj;
    });

  return (
    <View style={styles.header}>
      <HomeHeader />
      <HomeRecentActivity badgeCompletedTextList={badgeCompletedTextList} />
    </View>
  );
};
