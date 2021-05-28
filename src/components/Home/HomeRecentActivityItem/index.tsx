import React from 'react';
import { View, Text } from 'react-native';

import { BadgeTitleRewardText } from '../../../screens/HomeScreen';
import SvgContainer from '../../SvgContainer';
import styles from './styles';

const badgeMetadata = {
  height: '40',
  width: '40',
};

const HomeRecentActivityItem = ({
  badgeTitle,
  rewardText,
}: BadgeTitleRewardText) => {
  return (
    <View style={styles.container}>
      <SvgContainer
        badgeTitle={badgeTitle}
        height={badgeMetadata.height}
        width={badgeMetadata.width}
      />
      <Text>{rewardText}</Text>
    </View>
  );
};

export default HomeRecentActivityItem;
