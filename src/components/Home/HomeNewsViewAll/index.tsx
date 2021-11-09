import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import HomeNewsItem from '../HomeNewsItem';
import { NewsItem } from '../HomeNews';
import styles from './styles';

/* eslint-disable react/no-array-index-key */

type HomeNewsViewAllProps = {
  route: any;
  navigation: any;
};

const HomeNewsViewAll = ({ route, navigation }: HomeNewsViewAllProps) => {
  const { news } = route.params;

  return (
    <View>
      <Text style={styles.title}>NEWS</Text>
      <ScrollView style={{ marginLeft: '3%' }}>
        {news.map((recentNews: NewsItem) => {
          const { title, link, excerpt } = recentNews;
          return (
            <HomeNewsItem
              key={link}
              newsTitle={title}
              newsText={excerpt}
              link={link}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeNewsViewAll;
