import React from 'react';
import { View, Text } from 'react-native';

import SvgContainer from '../../SvgContainer';
import styles from './styles';

const badgeMetadata = {
  height: '45',
  width: '45',
};

interface HomeNewsItemProps {
  newsTitle: string;
  newsText: string;
}

const HomeNewsItem = ({ newsTitle, newsText }: HomeNewsItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={{ padding: 20 }}>
          <SvgContainer
            badgeTitle="News Book"
            height={badgeMetadata.height}
            width={badgeMetadata.width}
          />
        </View>
        <Text style={styles.newsText}>
          <Text style={styles.newsTitle}>{newsTitle}: </Text>
          {newsText}
        </Text>
      </View>
    </View>
  );
};

export default HomeNewsItem;
