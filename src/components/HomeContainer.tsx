import React, { useContext } from 'react';

import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';
import HomeScreen from '../screens/HomeScreen';

export interface BadgeTitleRewardText {
  badgeTitle: string;
  rewardText: string;
}
// Recent badges are determined by getting the response list, filtering out negative responses, and sorting responses by date
export const HomeContainer = () => {
  const { questionState } = useContext(QuestionContext);
  const { responseState } = useContext(ResponseContext);

  // filters out negative responses
  const positiveResponse = responseState.items.filter(
    response => response.answer === 'Yes' || response.answer === 'Y',
  );

  // sorts response by date
  const sortedResponses = positiveResponse.sort((a, b) => {
    const date1 = new Date(a.createdAt);
    const date2 = new Date(b.createdAt);
    if (date1 > date2) {
      return -1;
    }
    return 1;
  });

  // matches recent badges with reward text
  const badgeCompletedTextList: (
    | BadgeTitleRewardText
    | undefined
  )[] = sortedResponses.map(response => {
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

  return <HomeScreen badgeCompletedTextList={badgeCompletedTextList} />;
};
