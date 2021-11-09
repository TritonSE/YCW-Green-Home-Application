/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { View } from 'react-native';
import { QuestionContext } from '../contexts/QuestionsContext';
import { ResponseContext } from '../contexts/ResponseContext';
import { BadgeTitleRewardText } from '../components/HomeContainer';
import HomeHeader from '../components/Home/HomeHeader';
import HomeNews from '../components/Home/HomeNews';
import { HomeRecentActivity } from '../components/Home/HomeRecentActivity';
import styles from '../styles/HomeScreenStyles';

interface HomeScreenProps {
  navigation: any;
}

const HomeMainScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
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
      <HomeNews navigation={navigation} />
      <HomeRecentActivity
        navigation={navigation}
        badgeCompletedTextList={badgeCompletedTextList}
      />
    </View>
  );
};

export default HomeMainScreen;
