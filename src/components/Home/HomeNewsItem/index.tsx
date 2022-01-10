import React from 'react';
import { View, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SvgContainer from '../../SvgContainer';
import styles from './styles';

const badgeMetadata = {
  height: '45',
  width: '45',
};

interface HomeNewsItemProps {
  newsTitle: string;
  newsText: string;
  link: string;
}

const openLink = (url: string) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      alert(`Failed to open URL: ${url}`);
    }
  });
};

const HomeNewsItem = ({ newsTitle, newsText, link }: HomeNewsItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openLink(link)}>
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
      </TouchableOpacity>
    </View>
  );
};

export default HomeNewsItem;
