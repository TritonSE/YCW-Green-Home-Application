import React from 'react';
import { View, Text } from 'react-native';
import { BadgeTitleRewardText } from '../../../screens/HomeScreen';
import SvgContainer from '../../SvgContainer';
import styles from './styles';

const badgeMetadata = {
  height: '51',
  width: '51',
};

const HomeRecentActivityItem = ({
  badgeTitle,
  rewardText,
}: BadgeTitleRewardText) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={{ padding: 20 }}>
          <SvgContainer
            badgeTitle={badgeTitle}
            height={badgeMetadata.height}
            width={badgeMetadata.width}
          />
        </View>

        <Text style={styles.rewardText}>{rewardText}</Text>
      </View>
    </View>
  );
};

export default HomeRecentActivityItem;
